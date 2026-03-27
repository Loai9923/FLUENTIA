import { Routes } from '@angular/router';
import { queryParamValidityResolver } from '@core/resolvers/query-param-validity.resolver';

const loginRoutes: Routes = [
  {
    path: '',
    redirectTo: 'step-one',
    pathMatch: 'full',
  },
  {
    path: 'step-one',
    loadComponent: () => import('./step-one/step-one.component'),
  },
  {
    path: 'step-two',
    loadComponent: () => import('./step-two/step-two.component'),
    resolve: { queryParams: queryParamValidityResolver },
    data: {
      requiredQueryParams: ['username'],
    },
  },
];

export default loginRoutes;
