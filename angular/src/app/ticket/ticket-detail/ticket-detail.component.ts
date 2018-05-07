import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TicketDetail } from '../../models/TicketDetail';
import { TicketService } from '../../core/ticket.service';
import { Validators } from '@angular/forms';
import { ResGeneric } from '../../models/resGeneric';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-ticket.detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketDetail;
 
  constructor(private ticketService: TicketService,
    private route: ActivatedRoute, private toastr: ToastrService, private url: LocationStrategy, private router: Router) { }


  ngOnInit() {
    this.initResData();
  }


  initResData() {

    const resData: ResGeneric<TicketDetail> = this.route.snapshot.data['ticket'];

    if (resData.error) {
      this.toastr.error(resData.error, '', { closeButton: true });
    } else {
      this.ticket = resData.data;
    }

  }
}