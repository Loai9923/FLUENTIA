import { FormControl } from '@angular/forms';
import { AppUser } from '@shared/interfaces/user/app-user.interface';

export interface LoginForm {
  userName: FormControl<string>;
  password: FormControl<string>;
}
export interface LoginPayload {
  userName: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  userInfo: AppUser;
}
