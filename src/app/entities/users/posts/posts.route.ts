import { Route } from '@angular/router';

import { UserPostsComponent } from './posts.component';

export const userPostsRoute: Route = {
  path: 'users/:userId/posts',
  component: UserPostsComponent,
  data: {
    breadcrumb: 'Posts'
  },
  // canActivate: [AuthGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
