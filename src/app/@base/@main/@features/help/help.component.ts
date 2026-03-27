import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import { MainPageWrapperComponent } from '@shared/components/wrappers/main-page-wrapper/main-page-wrapper.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  imports: [CoreModule, MainPageWrapperComponent],
})
export default class HelpComponent extends BaseComponent {
  constructor() {
    super();
  }
}
