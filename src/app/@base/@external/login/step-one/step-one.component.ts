import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ExternalService } from '@base/@external/services/external/external.service';
import { TranslateModule } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base/base.component';
import { ActionButtonComponent } from '@shared/components/buttons/action-button/action-button.component';
import { ChangeLanguageComponent } from '@shared/components/buttons/change-language/change-language.component';
import { FormErrorsComponent } from '@shared/components/forms/form-errors/form-errors.component';
import { RealsoftCheckbox } from 'realsoft-reusable-components/checkbox';
import {
  RealsoftError,
  RealsoftFormField,
  RealsoftInput,
  RealsoftSuffix,
} from 'realsoft-reusable-components/features';
import { finalize, takeUntil, timeout } from 'rxjs';
import { LoginForm } from '../interfaces/login.interface';

@Component({
  selector: 'app-step-one',
  imports: [
    CommonModule,
    CdkTrapFocus,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ChangeLanguageComponent,
    MatCheckboxModule,
    FormErrorsComponent,
    FormsModule,
    RealsoftInput,
    RealsoftFormField,
    RealsoftError,
    RealsoftSuffix,
    RealsoftCheckbox,
    ActionButtonComponent,
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export default class StepOneComponent extends BaseComponent {
  private _externalService = inject(ExternalService);

  form!: FormGroup<LoginForm>;
  hide = signal<boolean>(true);

  constructor() {
    super();

    this.initForm();
  }

  initForm() {
    this.form = this._formBuilder.group({
      userName: this._formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: this._formBuilder.control('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this._isLoading.set(true);

    this._externalService
      .login(this.form.getRawValue())
      .pipe(
        timeout(this._defaultTimeout),
        takeUntil(this.destroy$),
        finalize(() => this._isLoading.set(false)),
      )
      .subscribe({
        next: (res) => {
          this._toast.showSuccess(
            this._translate.instant(
              'pages.external.login.stepOne.messages.success',
            ),
          );

          this._router.navigate(['external/login/step-two'], {
            queryParams: { username: this.form.value.userName },
          });
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
}
