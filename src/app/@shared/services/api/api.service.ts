import {
  HttpClient,
  HttpContext,
  HttpContextToken,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

interface APIQueryParam {
  [key: string]: any;
}

interface SanitizedQueryParams {
  [key: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
}

interface APIBody {
  [key: string]: any;
}

export interface APIContext {
  key: HttpContextToken<any>;
  value: any;
}

interface APIOptions {
  path: string;
  params?: APIQueryParam;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  body?: APIBody;
  withCredentials?: boolean;
  contexts?: APIContext[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _baseUrl: string;
  private _http = inject(HttpClient);

  constructor() {
    this._baseUrl = environment.apiUrl;
  }

  get<T = unknown>(options: APIOptions = { path: '' }) {
    const sanitizedQueryParams = this._sanitizeQueryParams(
      options.params ?? {},
    );
    const url = this._baseUrl + (options.path ?? '');
    const httpParams: HttpParams = new HttpParams({
      fromObject: sanitizedQueryParams,
    });

    return this._http.get<T>(url, {
      params: httpParams,
      responseType: (options.responseType as 'json') || 'json',
      observe: (options.observe as 'body') || 'body',
      context: _handleContexts(options.contexts),
      withCredentials: options.withCredentials ?? true,
    });
  }

  post<T = unknown>(options: APIOptions = { path: '' }) {
    const url = this._baseUrl + (options.path ?? '');
    const sanitizedQueryParams = this._sanitizeQueryParams(
      options.params ?? {},
    );
    const httpParams: HttpParams = new HttpParams({
      fromObject: sanitizedQueryParams,
    });

    return this._http.post<T>(url, options.body, {
      params: httpParams,
      responseType: (options.responseType as 'json') || 'json',
      observe: (options.observe as 'body') || 'body',
      context: _handleContexts(options.contexts),
      withCredentials: options.withCredentials ?? true,
    });
  }

  delete<T = unknown>(options: APIOptions = { path: '' }) {
    const url = this._baseUrl + (options.path ?? '');
    const sanitizedQueryParams = this._sanitizeQueryParams(
      options.params ?? {},
    );
    const httpParams: HttpParams = new HttpParams({
      fromObject: sanitizedQueryParams,
    });
    return this._http.delete<T>(url, {
      params: httpParams,
      body: options.body,
      responseType: (options.responseType as 'json') || 'json',
      observe: (options.observe as 'body') || 'body',
      context: _handleContexts(options.contexts),
      withCredentials: options.withCredentials ?? true,
    });
  }

  patch<T = unknown>(options: APIOptions = { path: '' }) {
    const url = this._baseUrl + (options.path ?? '');
    const sanitizedQueryParams = this._sanitizeQueryParams(
      options.params ?? {},
    );
    const httpParams: HttpParams = new HttpParams({
      fromObject: sanitizedQueryParams,
    });
    return this._http.patch<T>(url, options.body, {
      params: httpParams,
      responseType: (options.responseType as 'json') || 'json',
      observe: (options.observe as 'body') || 'body',
      context: _handleContexts(options.contexts),
      withCredentials: options.withCredentials ?? true,
    });
  }

  put<T = unknown>(options: APIOptions = { path: '' }) {
    const url = this._baseUrl + (options.path ?? '');
    const sanitizedQueryParams = this._sanitizeQueryParams(
      options.params ?? {},
    );
    const httpParams: HttpParams = new HttpParams({
      fromObject: sanitizedQueryParams,
    });

    return this._http.put<T>(url, options.body, {
      params: httpParams,
      responseType: (options.responseType as 'json') || 'json',
      observe: (options.observe as 'body') || 'body',
      context: _handleContexts(options.contexts),
      withCredentials: options.withCredentials ?? true,
    });
  }

  // Clean Object from falsy values.
  private _sanitizeQueryParams(params: APIQueryParam): SanitizedQueryParams {
    for (const param of Object.keys(params)) {
      const value = params[param];

      if (value == undefined || value == null || value == '')
        delete params[param];
    }

    return params as SanitizedQueryParams;
  }
}

function _handleContexts(_contexts: APIContext[] | undefined): HttpContext {
  const contexts: APIContext[] = _contexts || [];
  const httpContext = new HttpContext();

  for (const context of contexts) {
    const httpContextValue = new HttpContextToken<any>(() => context.value);
    httpContext.set(context.key, httpContextValue.defaultValue() ?? true);
  }

  return httpContext;
}
