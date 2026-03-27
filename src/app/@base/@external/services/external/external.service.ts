import { inject, Injectable } from '@angular/core';
import {
  LoginPayload,
  LoginResponse,
} from '@base/@external/login/interfaces/login.interface';
import { ApiResult } from '@shared/interfaces';
import { ApiService } from '@shared/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  private _api = inject(ApiService);

  login(data: LoginPayload) {
    return this._api.post<ApiResult>({
      path: '/users/login',
      body: data,
    });
  }

  verifyOtp(username: string, otp: number) {
    return this._api.post<LoginResponse>({
      path: '/users/checkOtp',
      body: {
        userName: username,
        otpValue: otp,
      },
      withCredentials: true,
    });
  }

  resendOtp(username: string) {
    return this._api.post<ApiResult>({
      path: '/users/resendOTP',
      body: { userName: username },
    });
  }
}
