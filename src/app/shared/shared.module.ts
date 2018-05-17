import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CollapseComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  exports: [
    HttpClientModule,
    CollapseComponent
  ],
  declarations: [
    CollapseComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
