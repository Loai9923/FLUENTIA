import { HttpInterceptorFn } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';

export const appHttpInterceptors: HttpInterceptorFn[] = [
  // AuthInterceptor,
  ErrorInterceptor,
];
