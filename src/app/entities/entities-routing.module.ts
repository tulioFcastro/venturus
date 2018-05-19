import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  notFoundRoute,
  usersRoute,
  userPostsRoute,
  userAlbumsRoute
} from './';

const routes: Routes = [
  usersRoute,
  notFoundRoute,
  userPostsRoute,
  userAlbumsRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
