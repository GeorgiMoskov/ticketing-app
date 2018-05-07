import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

import { TicketService } from '../../core/ticket.service';
import { Ticket } from '../../models/Ticket';
import { UserService } from '../../core/user.service';
import { LocationStrategy } from '@angular/common';
import { ResGeneric } from '../../models/resGeneric';
// import { GetAllAssignToLogedUserResolver } from '../../core/resolvers/tickets/get-all-assign-to-loged-user-resolver';
// import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],

})

export class TicketListComponent implements OnInit {


  tickets: Ticket[];


  constructor(private ticketService: TicketService, private route: ActivatedRoute,
    private toastr: ToastrService, private url: LocationStrategy, private router: Router) {

  }

  ngOnInit() {
    this.initResData();

  }


  btnClicked(ticketId) {
    //  console.log(this.router.url+'/detail/'+ ticketId)
     this.router.navigateByUrl(this.router.url + '/detail/' + ticketId);


  }

  initResData() {
    const resData: ResGeneric<Ticket[]> = this.route.snapshot.data['tickets'];
    if (resData.error) {
      this.toastr.error(resData.error, '', { closeButton: true });

    } else {
      this.tickets = resData.data;
    }

  }

}
