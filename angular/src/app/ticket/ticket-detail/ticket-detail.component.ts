import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TicketDetail } from '../../models/TicketDetail';
import { TicketService } from '../../core/ticket.service';
import { Validators } from '@angular/forms';
import { ResGeneric } from '../../models/resGeneric';
import { LocationStrategy } from '@angular/common';
import { Status } from '../../models/Status';
import { Importance } from '../../models/Importance';


@Component({
  selector: 'app-ticket.detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketDetail;

  statuses: Status[];

  importances: Importance[];

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute, private toastr: ToastrService, private url: LocationStrategy, private router: Router) { }


  ngOnInit() {
    this.initResData();
    this.initResStatuses();
    this.initResImportances();
  }


  initResData() {

    const resData: ResGeneric<TicketDetail> = this.route.snapshot.data['ticket'];

    if (resData.error) {
      this.toastr.error(resData.error, '', { closeButton: true });
    } else {
      this.ticket = resData.data;
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