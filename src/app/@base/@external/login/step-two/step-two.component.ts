import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExternalService } from '@base/@external/services/external/external.service';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { ActionButtonComponent } from '@shared/components/buttons/action-button/action-button.component';
import { NgOtpInputComponent } from 'ng-otp-input';
import { finalize, Subject, takeUntil, timeout, TimeoutError } from 'rxjs';
@Component({
  selector: 'app-step-two',
  imports: [
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    NgOtpInputComponent,
    ActionButtonComponent,
  ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export default class StepTwoComponent extends BaseComponent {
  private _externalService = inject(ExternalService);
  private _destroyRef = new Subject<void>();

  otpConfig = { length: 4 };
  otp!: FormControl<string>;
  username: WritableSignal<string> = signal('');

  constructor() {
    super();
    this._initOTPControl();
    this.username.set(this._activatedRoute.snapshot.queryParams['username']);

    if (this._isDevelopment) {
      this.otp.setValue('1111');
      this.verifyOtp();
    }
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
        timeout(this._defaultTimeout),
        takeUntil(this._destroyRef),
        finalize(() => this._isLoading.set(false)),
      )
      .subscribe({
        next: (res) => {
          this._toast.showSuccess(
            this._translate.instant(
              'pages.external.login.stepTwo.messages.success',
            ),
          );
          this._authService.handleLoggedInUser(res);
          this._authService.handleLoggedInUserRedirection();
        },
        error: (error) => {
          const message =
            error instanceof TimeoutError
              ? 'pages.external.login.stepTwo.messages.timeout'
              : 'pages.external.login.stepTwo.messages.failed';

          this._toast.showError(this._translate.instant(message));
        },
      });
  }

  resendOtp() {
    this._externalService
      .resendOtp(this.username())
      .pipe(
        timeout(this._defaultTimeout),
        takeUntil(this._destroyRef),
        finalize(() => this._isLoading.set(false)),
      )
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
}
