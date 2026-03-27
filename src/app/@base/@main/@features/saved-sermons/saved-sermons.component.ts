import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { MainPageWrapperComponent } from '@shared/components/wrappers/main-page-wrapper/main-page-wrapper.component';

@Component({
  selector: 'app-saved-sermons',
  templateUrl: './saved-sermons.component.html',
  styleUrls: ['./saved-sermons.component.scss'],
  imports: [CoreModule, MainPageWrapperComponent],
})
export default class SavedSermonsComponent extends BaseComponent {
  constructor() {
    super();
  }
}
