import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrl: './placement-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlacementTestComponent {}

