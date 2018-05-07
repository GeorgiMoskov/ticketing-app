import { Routes } from '@angular/router';

import { IsLogged } from '../core/guards/is-logged';

import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { GetAllAssignToLoggedUserResolver } from './../core/resolvers/tickets/get-all-assign-to-logged-user-resolver';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketDetailsByIdResolver } from '../core/resolvers/tickets/ticket-details-by-id-resolver';
import { GetTeamsByLoggedUserResolver } from '../core/resolvers/get-teams-by-logged-user.resolver';
import { GetAllTicketsOfTeamResolver } from '../core/resolvers/tickets/get-all-tickets-of-team';
import { AllTeamsComponent } from '../teams/all-teams/all-teams.component';
import { GetAllAssignToTicketsOfLoggedUserInTeamResolver } from '../core/resolvers/tickets/get-all-assign-to-logged-user-in-team-resolver';
import { GetAllTicketsRequestedByLoggedUserResolver } from '../core/resolvers/tickets/get-all-logged-user-requester-resolver';



export const ROUTES: Routes = [
    {
        path: '', component: TicketPanelComponent, canActivate: [IsLogged],
        children: [
            { path: 'all', component: TicketListComponent, resolve: { tickets: GetAllAssignToLoggedUserResolver } },
            { path: 'assignto', component: TicketListComponent, resolve: { tickets: GetAllAssignToLoggedUserResolver } },
            { path: 'assignto/detail/:ticketId', component: TicketDetailComponent, resolve: { ticket: TicketDetailsByIdResolver } },
            { path: 'assigntointeam', component: AllTeamsComponent, resolve: { teams:  GetTeamsByLoggedUserResolver } },
            { path: 'assigntointeam/:teamId', component: TicketListComponent, resolve: { tickets: GetAllAssignToTicketsOfLoggedUserInTeamResolver } },
            { path: 'assigntointeam/:teamId/details/:ticketId', component: TicketDetailComponent, resolve: { ticket: TicketDetailsByIdResolver } },
            { path: 'allofteam', component: AllTeamsComponent, resolve: { teams: GetTeamsByLoggedUserResolver } },
            { path: 'allofteam/:teamId', component: TicketListComponent, resolve: { tickets: GetAllTicketsOfTeamResolver } },
            { path: 'allofteam/:teamId/details/:ticketId', component: TicketDetailComponent, resolve: { ticket: TicketDetailsByIdResolver } },
            { path: 'requested', component: TicketListComponent, resolve: { tickets: GetAllTicketsRequestedByLoggedUserResolver } },
            { path: 'requested/details/:ticketId', component: TicketDetailComponent, resolve: { ticket: TicketDetailsByIdResolver } },

            { path: '', redirectTo: 'assignto' },

        ],
        runGuardsAndResolvers: 'always',
    },
]