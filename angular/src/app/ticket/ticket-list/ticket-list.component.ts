import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

import { TicketService } from '../../core/ticket.service';
import { Ticket } from '../../models/Ticket';
import { UserService } from '../../core/user.service';
import { LocationStrategy } from '@angular/common';
import { ResGeneric } from '../../models/resGeneric';
import { Status } from '../../models/Status';
import { Importance } from '../../models/Importance';
// import { GetAllAssignToLogedUserResolver } from '../../core/resolvers/tickets/get-all-assign-to-loged-user-resolver';
// import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],

})

export class TicketListComponent implements OnInit {


  tickets: Ticket[];

  statuses: Status[];

  importances: Importance[];

  constructor(private ticketService: TicketService, private route: ActivatedRoute,
    private toastr: ToastrService, private url: LocationStrategy, private router: Router) {

  }

  ngOnInit() {

    this.initResData();
    this.initResStatuses();
    this.initResImportances();
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

  initResStatuses() {
    const resDataStatus: ResGeneric<Status[]> = this.route.snapshot.data['statuses'];
    if (resDataStatus.error) {
      this.toastr.error(resDataStatus.error, '', { closeButton: true });
    } else {
      this.statuses = resDataStatus.data;
    }
  }

  initResImportances() {
    const resDataImportance: ResGeneric<Importance[]> = this.route.snapshot.data['importances'];
    if (resDataImportance.error) {
      this.toastr.error(resDataImportance.error, '', { closeButton: true });
    } else {
      this.importances = resDataImportance.data;
    }
  }

}
