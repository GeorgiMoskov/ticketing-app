import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsMainComponent } from './teams-main/teams-main.component';
import { TeamsRoutingModule } from './teams-routes.module';
import { MaterialModule } from '../shared/material.module';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamItemComponent } from './team-item/team-item.component';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TeamsRoutingModule
  ],
  declarations: [TeamsMainComponent, AllTeamsComponent, TeamsListComponent, TeamItemComponent, CreateTeamComponent]
})
export class TeamsModule { }
