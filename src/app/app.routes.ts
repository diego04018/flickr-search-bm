import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo:''
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/flicker-search.module').then((m) => m.FlickerSearchModule),
  },
];
