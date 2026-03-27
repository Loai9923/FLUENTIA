import { Routes } from '@angular/router';

const externalRoutes: Routes = [
  {
    path: 'login',
    title: 'pages.external.login.stepOne.login',
    loadChildren: () => import('./login/login.routes'),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component'),
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.component'),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

export default externalRoutes;
