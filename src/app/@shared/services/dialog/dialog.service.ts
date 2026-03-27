import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ConfirmationDialogComponent,
  ConformationDialogData,
  InformativeDialogComponent,
  InformativeDialogData,
} from '@shared/components/dialogs';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly dialog = inject(MatDialog);
  readonly translate = inject(TranslateService);

  openInformativeDialog(options?: { title?: string; description?: string }) {
    const dialogRef = this.dialog.open<
      InformativeDialogComponent,
      InformativeDialogData
    >(InformativeDialogComponent, {
      data: {
        title: options?.title || '',
        description: options?.description || '',
      },
      minWidth: '500px',
    });
    return dialogRef;
  }

  openConfirmationDialog(options?: { title?: string; description?: string }) {
    const dialogRef = this.dialog.open<
      ConfirmationDialogComponent,
      ConformationDialogData
    >(ConfirmationDialogComponent, {
      minWidth: '500px',
      data: {
        title: options?.title,
        description: options?.description,
      },
    });

    return dialogRef;
  }

  openSharedDialog<T extends ComponentType<unknown>>(
    component: T,
    data?: object,
  ) {
    const dialogRef = this.dialog.open(component, {
      minWidth: '650px',
      data,
    });
    return dialogRef;
  }
}
