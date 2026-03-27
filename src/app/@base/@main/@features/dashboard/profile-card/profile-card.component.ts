import { Component, input } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PreachingCardComponent } from '@shared/components/cards/preaching-card/preaching-card.component';
import { AppUser } from '@shared/interfaces/user/app-user.interface';
import { RealsoftButton } from 'realsoft-reusable-components/button';

@Component({
  selector: 'app-profile-card',
  imports: [CoreModule, RealsoftButton, PreachingCardComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  user = input.required<AppUser>();
}
