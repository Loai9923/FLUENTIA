import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

export const featuresRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
        title: 'pages.home.title',
        data: {
          description: 'pages.home.headerDescription',
        }
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about.component'),
        title: 'About',
      },
      {
        path: 'levels',
        loadComponent: () => import('./levels/levels.component'),
        title: 'English Levels',
      },
      {
        path: 'placement-test',
        loadComponent: () => import('./placement-test/placement-test.component'),
        title: 'Placement Test',
      },
      {
        path: 'how-it-works',
        loadComponent: () => import('./how-it-works/how-it-works.component'),
        title: 'How it works',
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pricing/pricing.component'),
        title: 'Schedule & Pricing',
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component'),
        title: 'Contact',
      }
    ],
  },
];

export default featuresRoutes;
