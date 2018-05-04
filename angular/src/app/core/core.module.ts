import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { IsNotLogged } from './guards/is-not-logged';
import { HttpClientModule } from '@angular/common/http';
import { IsLogged } from './guards/is-logged';
import { RoleService } from './role.service';
import { UserService } from './user.service';
import { canAccessAdminPanel } from './guards/canAccessAdminPanel';
import { GetAllRolesResolver } from './resolvers/get-all-roles.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: [],
      },
    }),
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {provide: AuthService, useClass: AuthService},
    {provide: RoleService, useClass: RoleService},
    {provide: UserService, useClass: UserService},
    {provide: IsNotLogged, useClass: IsNotLogged},
    {provide: IsLogged, useClass: IsLogged},
    {provide: canAccessAdminPanel, useClass: canAccessAdminPanel},
    {provide:GetAllRolesResolver, useClass: GetAllRolesResolver},
  ]
})
export class CoreModule { }
