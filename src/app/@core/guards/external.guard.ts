import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

export const externalGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);

  _authService.kickOut({ redirectToLogin: false });
  return true;
};
