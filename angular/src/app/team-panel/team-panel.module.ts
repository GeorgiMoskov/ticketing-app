import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPanelMainComponent } from './team-panel-main/team-panel-main.component';
import { TeamPanelRoutingModule } from './team-panel-routes.module';
import { MaterialModule } from '../shared/material.module';
import { TeamTicketsComponent } from './team-tickets/team-tickets.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AddUserToTeamComponent } from './add-user-to-team/add-user-to-team.component';
import { RemoveUserFromTeamComponent } from './remove-user-from-team/remove-user-from-team.component';
import { ChangeTeamLeaderComponent } from './change-team-leader/change-team-leader.component';

@NgModule({
  imports: [
    CommonModule,
    TeamPanelRoutingModule,
    MaterialModule,
  ],
  declarations: [
    TeamPanelMainComponent,
    TeamTicketsComponent,
    EditTeamComponent,
    AddUserToTeamComponent,
    RemoveUserFromTeamComponent,
    ChangeTeamLeaderComponent],
})
export class TeamPanelModule { }
