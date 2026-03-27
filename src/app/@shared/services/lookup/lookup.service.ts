import { inject, Injectable } from '@angular/core';
import {
  ApiResult
} from '@shared/interfaces';
import {
  CGRefCodesDomain,
  LookupPayload
} from '@shared/interfaces/lookup';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  private _apiService = inject(ApiService);

  getLookups(payload: CGRefCodesDomain[]) {
    return this._apiService.post<ApiResult<LookupPayload<CGRefCodesDomain[]>>>({
      path: '/public/getRefCodes',
      body: {
        domains: payload,
      },
    });
  }
}
