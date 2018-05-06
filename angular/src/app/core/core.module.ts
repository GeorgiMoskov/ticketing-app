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
import { GetAllUsersResolver } from './resolvers/get-all-users.resolver';
import { GetAllTeamsResolver } from './resolvers/get-all-teams.resolver';
import { TeamService } from './teams.service';
import { GetTeamsByLoggedUserResolver } from './resolvers/get-teams-by-logged-user.resolver';
import { CanAccessTeam } from './guards/canAccessTeam';
import { GetTeamByIdResolver } from './resolvers/get-team-by-id.resolver';

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
    {provide: TeamService, useClass: TeamService},
    {provide: IsNotLogged, useClass: IsNotLogged},
    {provide: CanAccessTeam, useClass: CanAccessTeam},
    {provide: IsLogged, useClass: IsLogged},
    {provide: canAccessAdminPanel, useClass: canAccessAdminPanel},
    {provide:GetAllRolesResolver, useClass: GetAllRolesResolver},
    {provide:GetAllUsersResolver, useClass: GetAllUsersResolver},
    {provide:GetAllTeamsResolver, useClass: GetAllTeamsResolver},
    {provide:GetTeamsByLoggedUserResolver, useClass: GetTeamsByLoggedUserResolver},
    {provide: GetTeamByIdResolver, useClass: GetTeamByIdResolver }
  ]
})
export class CoreModule { }
