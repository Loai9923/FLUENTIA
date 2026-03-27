import { HttpContextToken } from '@angular/common/http';
import { AcceptHeader } from './interfaces';

export const SHOW_TOAST_MESSAGE = new HttpContextToken<boolean>(() => true);
export const ACCEPT_HEADER = new HttpContextToken<AcceptHeader>(
  () => 'application/json',
);
