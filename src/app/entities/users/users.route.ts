import { Route } from '@angular/router';

import { UsersComponent } from './users.component';
import {userAlbumsRoute} from './albums';
import {userPostsRoute} from './posts';

export const usersRoute: Route = {
  path: 'users',
  component: UsersComponent,
  data: {
    breadcrumb: 'Users'
  },
  children: [
    userPostsRoute,
    userAlbumsRoute
  ]
  // canActivate: [AuthGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
