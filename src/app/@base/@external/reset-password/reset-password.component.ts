import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExternalService } from '@base/@external/services/external/external.service';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { ActionButtonComponent } from '@shared/components/buttons/action-button/action-button.component';
import {
  RealsoftFormField,
  RealsoftInput,
  RealsoftSuffix,
} from 'realsoft-reusable-components/features';
import { delay, Subject, takeUntil, timeout, TimeoutError } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  imports: [
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    ActionButtonComponent,
    RealsoftFormField,
    RealsoftInput,
    RealsoftSuffix,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export default class ResetPasswordComponent extends BaseComponent {
  private _externalService = inject(ExternalService);
  private _destroyRef = new Subject<void>();
  hide = signal<boolean>(true);

  hideConfirmPassword = signal<boolean>(true);

  otpConfig = { length: 4 };
  otp!: FormControl<string>;
  username: WritableSignal<string> = signal('');

  constructor() {
    super();
    this._initOTPControl();
    this.username.set(this._activatedRoute.snapshot.queryParams['username']);
  }

  private _initOTPControl() {
    this.otp = new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ],
    });
  }

  verifyOtp() {
    if (this.otp.invalid) return;

    this._isLoading.set(true);

    this._externalService
      .verifyOtp(this.username(), +this.otp.value)
      .pipe(
        delay(5000),
        timeout(this._defaultTimeout),
        takeUntil(this._destroyRef),
      )
      .subscribe({
        next: (res) => {
          this._authService.handleLoggedInUser(res);
          this._toast.showSuccess(
            this._translate.instant(
              'pages.external.login.stepTwo.messages.success',
            ),
          );
          this._router.navigateByUrl('/main/dashboard');
        },
        error: (error) => {
          const message =
            error instanceof TimeoutError
              ? 'pages.external.login.stepTwo.messages.timeout'
              : 'pages.external.login.stepTwo.messages.failed';

          this._toast.showError(this._translate.instant(message));
        },
        complete: () => {
          this._isLoading.set(false);
        },
      });
  }

  resendOtp() {
    this._externalService
      .resendOtp(this.username())
      .pipe(timeout(this._defaultTimeout), takeUntil(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._toast.showSuccess(
            this._translate.instant(
              'pages.external.login.stepTwo.resendOtp.messages.success',
            ),
          );
        },
        error: (error) => {
          const message =
            error instanceof TimeoutError
              ? 'pages.external.login.stepTwo.resendOtp.messages.timeout'
              : 'pages.external.login.stepTwo.resendOtp.messages.failed';

          this._toast.showError(this._translate.instant(message));
        },
      });
  }

  togglePassword() {
    this.hide.update((prev: boolean) => !prev);
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  toggleConfirmPassword() {
    this.hideConfirmPassword.update((prev: boolean) => !prev);
  }
}
