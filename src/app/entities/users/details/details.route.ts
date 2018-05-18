import { Route } from '@angular/router';

import { UserDetailsComponent } from './details.component';

export const userDetailsRoute: Route = {
  path: 'users/:id',
  component: UserDetailsComponent,
  data: {
    // authorities: ['CREATE_PUBLIC_CALL'],
    // pageTitle: 'global.menu.account.public-call',
    // pageRoute: 'global.menu.route.public-call-new'
  },
  // canActivate: [AuthGuard],
  // loadChildren: 'app/entities/entities.module#EntitiesModule'
};
