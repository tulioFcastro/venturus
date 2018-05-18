import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';

import {
  NotFoundComponent,
  UsersComponent,
  RegisterComponent,
  UserDetailsComponent,
  SearchUserComponent
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
    UserDetailsComponent,
    SearchUserComponent
  ]
})
export class EntitiesModule {
}
