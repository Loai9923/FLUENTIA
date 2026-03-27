import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { ACCEPT_HEADER } from './tokens';

export const AuthInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const translateService = inject(TranslateService);
  const currentLang = translateService.currentLang || 'en';
  const localStorageService = inject(LocalStorageService);

  const acceptHeader = req.context.get(ACCEPT_HEADER);

  const headersConfig = {
    Accept: acceptHeader,
    'Accept-Language': currentLang,
    'x-locale': currentLang,
    Authorization: `Bearer ${localStorageService.getItem('access-token')}`,
  };

  const clonedReq = req.clone({ setHeaders: headersConfig });

  return next(clonedReq);
};
