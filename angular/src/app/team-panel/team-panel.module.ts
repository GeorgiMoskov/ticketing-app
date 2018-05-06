import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPanelMainComponent } from './team-panel-main/team-panel-main.component';
import { TeamPanelRoutingModule } from './team-panel-routes.module';
import { MaterialModule } from '../shared/material.module';
import { TeamTicketsComponent } from './team-tickets/team-tickets.component';

@NgModule({
  imports: [
    CommonModule,
    TeamPanelRoutingModule,
    MaterialModule
  ],
  declarations: [TeamPanelMainComponent,TeamTicketsComponent]
})
export class TeamPanelModule { }
