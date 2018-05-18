import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesRoutingModule2 } from './entities-routing2.module';

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
    EntitiesRoutingModule2,
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
