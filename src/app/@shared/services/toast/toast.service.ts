import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ToastersComponent } from '@shared/components/toasters/toasters.component';

export type MessageNotifyActions = 'success' | 'warning' | 'danger' | 'info';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _translate = inject(TranslateService);
  private _snackBar = inject(MatSnackBar);

  showSuccess(message?: string, title?: string) {
    if (!title) title = this._translate.instant('messages.success.title');
    if (!message) message = this._translate.instant('messages.success.desc');

    return this._notify('success', title as string, message as string);
  }

  showError(message?: string, title?: string) {
    if (!title) title = this._translate.instant('messages.failed.title');
    if (!message) message = this._translate.instant('messages.failed.desc');
    return this._notify('warning', title as string, message as string);
  }

  showWarning(message: string, title?: string) {
    if (!title) title = this._translate.instant('messages.warning.title');

    return this._notify('info', title as string, message);
  }

  private _notify(
    action: MessageNotifyActions,
    title: string,
    message: string,
  ) {
    let config: MatSnackBarConfig = {};

    switch (action) {
      case 'success': {
        config = {
          panelClass: ['message-success'],
        };
        break;
      }
      case 'warning': {
        config = {
          panelClass: ['message-warning'],
        };
        break;
      }
      case 'info': {
        config = {
          panelClass: ['message-info'],
        };
        break;
      }
    }

    return this._snackBar.openFromComponent(ToastersComponent, {
      data: {
        title,
        message,
        action,
      },
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      ...config,
      duration: 3000,
    });
  }
}
