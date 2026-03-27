import { Component, input } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { InnerCardComponent } from '@shared/components/cards/inner-card/inner-card.component';
import { MosqueInfoData } from '../interfaces/dashboard.interfaces';

@Component({
  selector: 'app-mosque-card',
  imports: [CoreModule, InnerCardComponent],
  templateUrl: './mosque-card.component.html',
  styleUrl: './mosque-card.component.scss',
})
export class MosqueCardComponent {
  mosqueInfo = input.required<MosqueInfoData>();
}
