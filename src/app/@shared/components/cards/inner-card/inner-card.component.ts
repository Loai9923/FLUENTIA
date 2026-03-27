import { Component, input } from '@angular/core';
import { CoreModule } from '@core/core.module';

@Component({
  selector: 'app-inner-card',
  imports: [CoreModule],
  templateUrl: './inner-card.component.html',
  styleUrl: './inner-card.component.scss',
})
export class InnerCardComponent {
  title = input<string>();
}
