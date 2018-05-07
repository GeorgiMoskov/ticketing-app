import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IsLogged } from '../core/guards/is-logged';


export const ROUTES: Routes = [
  {
    path: '', component: MainComponent, canActivate: [IsLogged],
    children: [
      {path: 'teams', loadChildren: './../teams/teams.module#TeamsModule'},
      {path: 'admin', loadChildren: './../admin/admin.module#AdminModule' },
      {path: 'tickets', loadChildren: './../ticket/ticket.module#TicketModule' },
      {path: 'team-panel/:id', loadChildren: './../team-panel/team-panel.module#TeamPanelModule'},
    ]  
  },
];