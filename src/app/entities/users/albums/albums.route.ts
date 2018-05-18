import { Route } from '@angular/router';
import { UserAlbumsComponent } from './albums.component';

export const userAlbumsRoute: Route = {
  path: 'users/:userId/albums',
  component: UserAlbumsComponent,
  data: {
    // authorities: ['CREATE_PUBLIC_CALL'],
    // pageTitle: 'global.menu.account.public-call',
    // pageRoute: 'global.menu.route.public-call-new'
  }
};
