import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routes.module';
import { HeaderNavigationModule } from '../header-navigation/header-navigation.module';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    HeaderNavigationModule,
  ],
  declarations: [MainComponent],
})
export class DashboardModule { }
