import { CommonModule } from '@angular/common';
import { Component, inject, output, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SystemService } from '@shared/services/system/system.service';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-change-language',
  imports: [
    CommonModule,
    ActionButtonComponent,
    MatMenuModule,
    TranslateModule,
  ],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ChangeLanguageComponent {
  _systemService = inject(SystemService);
  _translate = inject(TranslateService);

  langChange = output<string>();

  get currentLanguage(): string {
    return this._systemService.currentLanguage;
  }

  get filteredSystemLanguages(): string[] {
    return this._systemService.systemLanguages.filter(
      (lang) => lang !== this._translate.currentLang
    );
  }

  switchLanguage(lang: string) {
    this._systemService.switchSystemLanguage(lang);
    this.langChange.emit(lang);
  }
}
