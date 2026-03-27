import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './@shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'external',
    loadChildren: () => import('./@base/@external/external.routes'),
  },
  {
    path: 'main',
    loadChildren: () => import('./@base/@main/@features/features.routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: '**',
    title: 'pages.notFound.title',
    component: PageNotFoundComponent,
  },
];
