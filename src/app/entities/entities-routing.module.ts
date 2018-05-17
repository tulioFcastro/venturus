import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  notFoundRoute,
  usersRoute
} from './';

const routes: Routes = [
  usersRoute,
  notFoundRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
