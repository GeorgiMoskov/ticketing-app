import { Routes } from '@angular/router';

import { IsLogged } from '../core/guards/is-logged';

import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { GetAllAssignToLogedUserResolver } from './../core/resolvers/tickets/get-all-assign-to-loged-user-resolver';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketDetailsByIdResolver } from '../core/resolvers/tickets/ticket-details-by-id-resolver';
import { canAccessAdminPanel } from '../core/guards/canAccessAdminPanel';


export const ROUTES: Routes = [
    {
        path: '', component: TicketPanelComponent, canActivate: [IsLogged],
        children: [
            { path: 'all', component: TicketListComponent, resolve: { tickets: GetAllAssignToLogedUserResolver } },
            { path: 'assignto', component: TicketListComponent, resolve: { tickets: GetAllAssignToLogedUserResolver } },
            { path: 'assignto/detail/:id', component: TicketDetailComponent, resolve: { ticket: TicketDetailsByIdResolver } },
            { path: '', redirectTo: 'assignto' },
            
        ],
    },
]