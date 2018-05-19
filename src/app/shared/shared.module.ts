import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  CollapseComponent,
  InfoDivComponent,
  NavbarComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    CollapseComponent,
    InfoDivComponent,
    NavbarComponent
  ],
  declarations: [
    CollapseComponent,
    InfoDivComponent,
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
