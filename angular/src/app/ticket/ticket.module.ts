import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatNativeDateModule,   } from '@angular/material';

import { TicketRoutingModule } from './ticket-routing.module';

import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TeamsModule } from '../teams/teams.module';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,

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
    TicketCreateComponent,
  ]
})
export class TicketModule { }
