import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

import { TicketService } from '../../core/ticket.service';
import { Ticket } from '../../models/Ticket';
import { UserService } from '../../core/user.service';
// import { GetAllAssignToLogedUserResolver } from '../../core/resolvers/tickets/get-all-assign-to-loged-user-resolver';
// import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],

})

export class TicketListComponent implements OnInit {


  tickets: Ticket[];
  resError: string;

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {

    this.ticketService.getAllAssignTicketsOfLogedUser()
      .subscribe(data => {
        this.tickets = data.data;
        this.resError = data.error;
      });

    }


}
