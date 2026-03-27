import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { ToastService } from '@shared/services/toast/toast.service';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  take,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';
import { SHOW_TOAST_MESSAGE } from './tokens';

// Global state for token refresh management
let isRefreshing = false;
let refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export const ErrorInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const _toast = inject(ToastService);
  const _authService = inject(AuthService);

  return next(req).pipe(
    timeout(60000),
    catchError((err: HttpErrorResponse) => {
      // Handle timeout errors
      if (err instanceof TimeoutError) {
        _toast.showError('shared.misc.timeoutError');
      }

      // Handle 401 Unauthorized errors with token refresh
      if (err.status === HttpStatusCode.Unauthorized) {
        return handle401Error(req, next, _authService, _toast);
      }

      // Handle other errors with toast messages
      const showToast = req.context.get(SHOW_TOAST_MESSAGE);
      if (err.error.hasError && showToast) {
        const errorMessage =
          err.error.Errors?.[0]?.errorMsg?.message || 'An error occurred';
        _toast.showError(errorMessage);
      }

      return throwError(() => err.error);
    }),
  );
};

/**
 * Handles 401 unauthorized errors by attempting token refresh
 * and retrying the original request with the new token
 */
function handle401Error(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  toastService: ToastService,
): Observable<HttpEvent<unknown>> {
  // If refresh is not in progress, start the refresh process
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return authService.refreshToken().pipe(
      switchMap((tokens) => {
        // Token refresh successful
        isRefreshing = false;
        refreshTokenSubject.next(tokens.accessToken);

        // Update stored tokens
        authService.updateStoredTokens(tokens.accessToken, tokens.refreshToken);

        // Retry the original request with new token
        return next(addTokenToRequest(req, tokens.accessToken));
      }),
      catchError((refreshError) => {
        // Token refresh failed - logout user
        isRefreshing = false;
        refreshTokenSubject.next(null);

        authService.kickOut();
        return throwError(() => refreshError);
      }),
    );
  }

  // If refresh is already in progress, wait for it to complete
  return refreshTokenSubject.pipe(
    filter((token) => token !== null), // Wait for token to be available
    take(1), // Take only the first emission
    switchMap((token) => {
      // Retry original request with the refreshed token
      return next(addTokenToRequest(req, token));
    }),
  );
}

/**
 * Adds the authentication token to a request
 */
function addTokenToRequest(
  req: HttpRequest<unknown>,
  token: string,
): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
