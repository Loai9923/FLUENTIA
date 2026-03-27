import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  readonly _router = inject(Router);
  readonly _localStorageService = inject(LocalStorageService);

  async canActivate(): Promise<boolean> {
    const hasToken = this._localStorageService.hasKey('access-token');

    if (hasToken) {
      return true;
    }

    // Not logged in, redirect to login page
    this._router.navigateByUrl('/external/login');
    return false;
  }
}
