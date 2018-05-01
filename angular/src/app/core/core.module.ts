import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { IsNotLogged } from './guards/is-not-logged';

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
  ],
  providers: [
    {provide: AuthService, useClass: AuthService},
    {provide: IsNotLogged, useClass: IsNotLogged},
  ]
})
export class CoreModule { }
