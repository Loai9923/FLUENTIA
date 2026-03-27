import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { RealsoftButton } from 'realsoft-reusable-components/button';

@Component({
  selector: 'app-page-not-found',
  imports: [CoreModule, RealsoftButton],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  private _router = inject(Router);

  goHome() {
    this._router.navigateByUrl('/main/home');
  }
}
