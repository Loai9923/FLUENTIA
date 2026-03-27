import { Injectable, signal } from '@angular/core';
import { AppUserType } from '@shared/enums/user/app-user-type.enum';
import { AppUser } from '@shared/interfaces/user/app-user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser = signal<AppUser | null>(null);
  currentUser = this._currentUser.asReadonly();

  get fullName() {
    return this._currentUser()?.name || '';
  }

  get email() {
    return this._currentUser()?.email || '';
  }

  get phoneNumber() {
    return this._currentUser()?.phoneNumber || null;
  }

  get isAdmin() {
    return this._currentUser()?.userRole == AppUserType.ADMIN;
  }

  setCurrentUser(user: AppUser | null) {
    this._currentUser.set(user);
  }

  isAuthenticated() {
    return this._currentUser() !== null;
  }
}
