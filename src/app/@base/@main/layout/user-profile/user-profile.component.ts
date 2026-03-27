import { Component } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BaseComponent } from '@shared/components/base/base.component';
import {
  RealsoftMenu,
  RealsoftMenuItem,
  RealsoftMenuTrigger,
} from 'realsoft-reusable-components/features';
import { RealsoftTooltip } from 'realsoft-reusable-components/tooltip';

@Component({
  selector: 'app-user-profile',
  imports: [
    CoreModule,
    RealsoftMenuTrigger,
    RealsoftTooltip,
    RealsoftMenu,
    RealsoftMenuItem,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent extends BaseComponent {
  currentUser = this._userService.currentUser;

  constructor() {
    super();
  }

  logout() {
    this._authService.kickOut();
  }
}
