import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routes.module';
import { MaterialModule } from '../shared/material.module';




@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
