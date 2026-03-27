import { Direction } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SystemService } from '@shared/services/system/system.service';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';

export interface ConformationDialogData {
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TranslateModule,
    DialogWrapperComponent,
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  readonly data = inject<ConformationDialogData>(MAT_DIALOG_DATA);

  systemService = inject(SystemService);
  
  protected get direction(): Direction {
    return this.systemService.direction;
  }
}
