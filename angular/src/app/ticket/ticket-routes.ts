import { Routes } from '@angular/router';

import { IsLogged } from '../core/guards/is-logged';

import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { GetAllAssignToLogedUserResolver } from './../core/resolvers/tickets/get-all-assign-to-loged-user-resolver';


export const ROUTES: Routes =[
    { path: '', component: TicketPanelComponent, canActivate:[IsLogged],
     children: [ 
        {path: '', redirectTo: 'all' },
        {path: 'all', component: TicketListComponent, resolve: {tickets: GetAllAssignToLogedUserResolver }  },
        // {path: 'allOfTeam', component: DeleteUserComponent, resolve: {users: GetAllUsersResolver} }
    ]},
]