//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { Eror404Component } from './eror404/eror404.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Eror404Component,
  ],
  imports: [
    //BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
