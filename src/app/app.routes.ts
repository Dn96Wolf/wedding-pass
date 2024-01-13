import { Routes } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
  {
    path: 'wedding-pass',
    component: PhotoComponent,
  },
  {
    path: '**',
    redirectTo: 'wedding-pass',
    pathMatch: 'full',
  },
];
