import { Routes } from '@angular/router';
import { TeamsMainComponent } from './teams-main/teams-main.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { GetAllTeamsResolver } from '../core/resolvers/get-all-teams.resolver';
import { resolve } from 'q';
import { GetTeamsByLoggedUserResolver } from '../core/resolvers/get-teams-by-logged-user.resolver';
import { CreateTeamComponent } from './create-team/create-team.component';


export const ROUTES: Routes =[
    { path: '', component: TeamsMainComponent,
     children: [ 
        {path: '', redirectTo: 'all-teams' },
        {path: 'all-teams', component: AllTeamsComponent, resolve: { teams: GetAllTeamsResolver }},
        {path: 'my-teams', component: AllTeamsComponent, resolve: {teams: GetTeamsByLoggedUserResolver}},
        {path: 'create-new-team', component: CreateTeamComponent}
        // {path: 'delete-user', component: DeleteUserComponent, resolve: {users: GetAllUsersResolver} }
    ]},
]