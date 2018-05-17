import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EntitiesModule } from './entities/entities.module';
import { DashboardComponent } from './dashboard';
import { AppRoutingModule } from './app-routing.module';
import {
  GeneralService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    EntitiesModule,
    AppRoutingModule
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
