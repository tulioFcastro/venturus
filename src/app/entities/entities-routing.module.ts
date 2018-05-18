import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  notFoundRoute,
  usersRoute,
  userDetailsRoute
} from './';

const routes: Routes = [
  usersRoute,
  notFoundRoute,
  userDetailsRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
