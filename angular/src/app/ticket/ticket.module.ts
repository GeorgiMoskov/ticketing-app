import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

import { TicketRoutingModule } from './ticket-routing.module';

import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TeamsModule } from '../teams/teams.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    TicketRoutingModule,
    TeamsModule,
  ],
  declarations: [
    TicketPanelComponent,
    TicketListComponent,
    TicketDetailComponent,
  ]
})
export class TicketModule { }
