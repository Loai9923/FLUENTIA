import { Direction } from '@angular/cdk/bidi';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';

type AppLanguages = 'ar' | 'en';
type DataValue = { [key: string]: DataValue } | string;
type AppLocals = {
  [local: string]: {
    lang: AppLanguages;
    data: { [key: string]: DataValue };
  };
};

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private _translate = inject(TranslateService);

  get isDevelopment(): boolean {
    return environment.production == false;
  }

  get isProduction(): boolean {
    return environment.production == true;
  }

  get systemLanguages(): string[] {
    return this._translate.getLangs();
  }

  get currentLanguage(): string {
    return this._translate.currentLang == 'en'
      ? this._translate.instant('pages.layout.header.language.en')
      : this._translate.instant('pages.layout.header.language.ar');
  }

  get currentLocale(): string {
    return this._translate.currentLang;
  }

  get direction(): Direction {
    return this._translate.currentLang == 'en' ? 'ltr' : 'rtl';
  }

  initLanguageConfig(
    languages: string[],
    defaultLanguage: string,
    locals: AppLocals,
  ): void {
    this._translate.addLangs(languages);
    this.setTranslations(locals);

    let systemLanguage = this.getSystemLanguage();

    if (!systemLanguage) {
      systemLanguage = defaultLanguage || 'en';
      this.setSystemLanguage(systemLanguage);
    }

    this._translate.setDefaultLang(systemLanguage);
    this._translate.use(systemLanguage);

    this.reflectDirectionChanges(systemLanguage);
  }

  setTranslations(locals: AppLocals) {
    for (const langLocal in locals) {
      if (Object.prototype.hasOwnProperty.call(locals, langLocal)) {
        const element = locals[langLocal];
        this._translate.setTranslation(element.lang, element.data, true);
      }
    }
  }

  setSystemLanguage(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getSystemLanguage(): string | null {
    return localStorage.getItem('lang') || null;
  }

  switchSystemLanguage(lang: string) {
    this.setSystemLanguage(lang);
    window.location.reload();
  }

  reflectDirectionChanges(lang: string) {
    const html = document.querySelector('html');

    if (!html) return;

    switch (lang) {
      case 'ar': {
        html.setAttribute('dir', 'rtl');
        break;
      }

      case 'en': {
        html.setAttribute('dir', 'ltr');
        break;
      }

      default:
        return;
    }
  }
}
