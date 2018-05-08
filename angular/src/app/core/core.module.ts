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
import { TicketService } from './ticket.service';
import { GetAllAssignToLoggedUserResolver } from './resolvers/tickets/get-all-assign-to-logged-user-resolver';
import { TicketDetailsByIdResolver } from './resolvers/tickets/ticket-details-by-id-resolver';
import { GetAllTicketsOfTeamResolver } from './resolvers/tickets/get-all-tickets-of-team';
import { GetAllAssignToTicketsOfLoggedUserInTeamResolver } from './resolvers/tickets/get-all-assign-to-logged-user-in-team-resolver';
import { GetAllTicketsRequestedByLoggedUserResolver } from './resolvers/tickets/get-all-logged-user-requester-resolver';
import { GetAllStatusResolver } from './resolvers/get-all-statuses-resolver';
import { StatusService } from './status.service';
import { ImportanceService } from './importance.services';
import { GetAllImportanceResolver } from './resolvers/get-all-importances-resolver';



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
    { provide: AuthService, useClass: AuthService },
    { provide: RoleService, useClass: RoleService },
    { provide: UserService, useClass: UserService },
    { provide: TeamService, useClass: TeamService },
    { provide: IsNotLogged, useClass: IsNotLogged },
    { provide: CanAccessTeam, useClass: CanAccessTeam },
    { provide: IsLogged, useClass: IsLogged },
    { provide: canAccessAdminPanel, useClass: canAccessAdminPanel },
    { provide: GetAllRolesResolver, useClass: GetAllRolesResolver },
    { provide: GetAllUsersResolver, useClass: GetAllUsersResolver },
    { provide: GetAllTeamsResolver, useClass: GetAllTeamsResolver },
    { provide: GetTeamsByLoggedUserResolver, useClass: GetTeamsByLoggedUserResolver },
    { provide: GetTeamByIdResolver, useClass: GetTeamByIdResolver },
    { provide: TicketService, useClass: TicketService },
    { provide: GetAllAssignToLoggedUserResolver, useClass: GetAllAssignToLoggedUserResolver },
    { provide: TicketDetailsByIdResolver, useClass: TicketDetailsByIdResolver },
    { provide: GetAllTicketsOfTeamResolver, useClass: GetAllTicketsOfTeamResolver },
    { provide: GetAllAssignToTicketsOfLoggedUserInTeamResolver, useClass: GetAllAssignToTicketsOfLoggedUserInTeamResolver },
    { provide: GetAllTicketsRequestedByLoggedUserResolver, useClass: GetAllTicketsRequestedByLoggedUserResolver },
    { provide: StatusService, useClass: StatusService },
    { provide: GetAllStatusResolver, useClass: GetAllStatusResolver },
    { provide: ImportanceService, useClass: ImportanceService },
    { provide: GetAllImportanceResolver, useClass: GetAllImportanceResolver },
    
  ]
})
export class CoreModule { }
