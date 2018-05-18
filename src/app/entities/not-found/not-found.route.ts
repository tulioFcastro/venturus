import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const notFoundRoute: Route = {
  path: 'not-found',
  component: NotFoundComponent,
  data: {
    breadcrumb: 'Not found'
  }
};
