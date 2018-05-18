import { Route } from '@angular/router';

import { UserPostsComponent } from './posts.component';

export const userPostsRoute: Route = {
  path: 'users/:userId/posts',
  component: UserPostsComponent,
  data: {
    // authorities: ['CREATE_PUBLIC_CALL'],
    // pageTitle: 'global.menu.account.public-call',
    // pageRoute: 'global.menu.route.public-call-new'
  },
  // canActivate: [AuthGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
