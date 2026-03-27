import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '@base/@external/login/interfaces/login.interface';
import { AppUser } from '@shared/interfaces/user/app-user.interface';
import { ApiService } from '@shared/services/api/api.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { map, Observable, take } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _router = inject(Router);
  private _localStorageService = inject(LocalStorageService);
  private _apiService = inject(ApiService);
  private _userService = inject(UserService);

  isLoggedIn() {
    return this._localStorageService.getItem('access-token');
  }

  handleLoggedInUser(payload: LoginResponse) {
    this._userService.setCurrentUser(payload.userInfo);
    this._localStorageService.setItem('access-token', payload.token);
    this._localStorageService.setItem('refresh-token', payload.refreshToken);
  }

  handleLoggedInUserRedirection() {
    if (this._userService.isAdmin) {
      this._router.navigateByUrl('/admin');
    } else {
      this._router.navigateByUrl('/main/home');
    }
  }

  fetchCurrentUserData(
    options: { updateToken?: boolean } = { updateToken: false },
  ) {
    return this._apiService.get<{
      userInfo: AppUser;
      tokens: { token: string; refreshToken: string };
    }>({
      path: '/users/auth',
      params: {
        updateToken: options.updateToken ? 1 : 0,
      },
    });
  }

  kickOut(options: { redirectToLogin?: boolean } = { redirectToLogin: true }) {
    this._apiService
      .post({
        path: '/users/logout',
      })
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this._userService.setCurrentUser(null);
          this._localStorageService.removeItems([
            'currentUser',
            'access-token',
            'refresh-token',
          ]);

          if (options.redirectToLogin) {
            this._router.navigateByUrl('/external/login', {});
          }
        },
      });
  }

  /**
   * Updates the stored access and refresh tokens in localStorage
   * Used after successful token refresh to maintain user session
   */
  updateStoredTokens(accessToken: string, refreshToken: string): void {
    this._localStorageService.setItem('access-token', accessToken);
    this._localStorageService.setItem('refresh-token', refreshToken);
  }

  refreshToken(): Observable<{ accessToken: string; refreshToken: string }> {
    return this._apiService
      .get<{
        userInfo: AppUser;
        tokens: { token: string; refreshToken: string };
      }>({
        path: '/users/refresh',
      })
      .pipe(
        map((res) => {
          // Update user info if provided
          if (res.userInfo) {
            this._userService.setCurrentUser(res.userInfo);
          }

          return {
            accessToken: res.tokens.token,
            refreshToken: res.tokens.refreshToken,
          };
        }),
      );
  }
}
