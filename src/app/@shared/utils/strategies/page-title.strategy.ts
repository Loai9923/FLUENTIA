import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  private _savedTitle: string | undefined;

  private _translate = inject(TranslateService);
  private title = inject(Title);

  constructor() {
    super();
    this.listenToLanguageChanges();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    const translatedTitle = title
      ? this._translate.instant(title)
      : 'Application';
    this.title.setTitle(translatedTitle);
    this._savedTitle = title;
  }

  listenToLanguageChanges() {
    this._translate.onLangChange.subscribe(() => {
      if (!this._savedTitle) return;

      let title = this._translate.instant(this._savedTitle);
      this.title.setTitle(title);
    });
  }
}
