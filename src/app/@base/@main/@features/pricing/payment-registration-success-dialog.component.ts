import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Shown after PayPal payment succeeds and the receipt is saved successfully.
 */
@Component({
  selector: 'app-payment-registration-success-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, TranslateModule],
  templateUrl: './payment-registration-success-dialog.component.html',
  styleUrl: './payment-registration-success-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentRegistrationSuccessDialogComponent {
  /** Kept in TS so the template has no `@` (Angular treats `@` as control-flow syntax). */
  readonly contactEmail = 'FluentiaAcademy@outlook.com';
  readonly mailtoHref = 'mailto:FluentiaAcademy@outlook.com';
}
