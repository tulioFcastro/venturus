import { Route } from '@angular/router';
import { UserAlbumsComponent } from './albums.component';

export const userAlbumsRoute: Route = {
  path: 'users/:userId/albums',
  component: UserAlbumsComponent,
  data: {
    breadcrumb: 'Albums'
  }
};
