import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { DialogWrapperComponent } from '../dialog-wrapper/dialog-wrapper.component';

export interface InformativeDialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-informative-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TranslateModule,
    DialogWrapperComponent,
  ],
  templateUrl: './informative-dialog.component.html',
  styleUrl: './informative-dialog.component.scss',
})
export class InformativeDialogComponent {
  readonly dialogRef = inject(MatDialogRef<InformativeDialogComponent>);
  readonly data = inject<InformativeDialogData>(MAT_DIALOG_DATA);
}
