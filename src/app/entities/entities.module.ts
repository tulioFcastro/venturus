import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';

import {
  NotFoundComponent,
  UsersComponent,
  RegisterComponent,
  UserPostsComponent,
  SearchUserComponent,
  UserAlbumsComponent
} from './';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    NotFoundComponent,
    RegisterComponent,
    UserPostsComponent,
    SearchUserComponent,
    UserAlbumsComponent
  ]
})
export class EntitiesModule {
}
