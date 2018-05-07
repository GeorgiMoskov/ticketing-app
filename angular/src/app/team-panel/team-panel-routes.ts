import { Routes } from '@angular/router';
import { TeamPanelMainComponent } from './team-panel-main/team-panel-main.component';
import { CanAccessTeam } from '../core/guards/canAccessTeam';
import { TeamTicketsComponent } from './team-tickets/team-tickets.component';
import { GetTeamByIdResolver } from '../core/resolvers/get-team-by-id.resolver';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { CanEditTeam } from '../core/guards/can-edit-team';
import { GetAllUsersResolver } from '../core/resolvers/get-all-users.resolver';



export const ROUTES: Routes =[
    { path: '', component: TeamPanelMainComponent, canActivate: [CanAccessTeam], resolve:{team : GetTeamByIdResolver}, runGuardsAndResolvers: "always",
     children: [ 
        {path: 'all-team-tickets', component: TeamTicketsComponent },
        {path: 'my-team-tickets', component: TeamTicketsComponent },
        {path: 'edit-team', component: EditTeamComponent, canActivate:[CanEditTeam], resolve:{allUsers: GetAllUsersResolver } },
       
    ]},
]

// let id = this.route.snapshot.paramMap.get('id');