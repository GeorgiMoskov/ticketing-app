import { Routes } from '@angular/router';
import { TeamPanelMainComponent } from './team-panel-main/team-panel-main.component';
import { CanAccessTeam } from '../core/guards/canAccessTeam';
import { TeamTicketsComponent } from './team-tickets/team-tickets.component';
import { GetTeamByIdResolver } from '../core/resolvers/get-team-by-id.resolver';



export const ROUTES: Routes =[
    { path: '', component: TeamPanelMainComponent, canActivate: [CanAccessTeam], resolve:{team : GetTeamByIdResolver},
     children: [ 
        {path: 'all-team-tickets', component: TeamTicketsComponent },
        {path: 'my-team-tickets', component: TeamTicketsComponent },
        {path: 'edit-team', component: TeamPanelMainComponent },
       
    ]},
]

// let id = this.route.snapshot.paramMap.get('id');