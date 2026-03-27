import { Component, inject } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { UserService } from '@shared/services/user/user.service';
import { InnerCardComponent } from '../inner-card/inner-card.component';

@Component({
  selector: 'app-preaching-card',
  imports: [CoreModule, InnerCardComponent],
  templateUrl: './preaching-card.component.html',
  styleUrl: './preaching-card.component.scss',
})
export class PreachingCardComponent {
  private _userService = inject(UserService);

  user = this._userService.currentUser;
}
