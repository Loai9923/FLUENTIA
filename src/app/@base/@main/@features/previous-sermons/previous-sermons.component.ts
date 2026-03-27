import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { MainPageWrapperComponent } from '@shared/components/wrappers/main-page-wrapper/main-page-wrapper.component';

@Component({
  selector: 'app-previous-sermons',
  templateUrl: './previous-sermons.component.html',
  styleUrls: ['./previous-sermons.component.scss'],
  imports: [CoreModule, MainPageWrapperComponent],
})
export default class PreviousSermonsComponent extends BaseComponent {
  constructor() {
    super();
  }
}
