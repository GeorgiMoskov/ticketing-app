import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TicketDetail } from '../../models/TicketDetail';
import { TicketService } from '../../core/ticket.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-ticket.detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketDetail;
  resError: string;
  numberRegex = '/^\d+$/';

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.getTicket();
  }

  getTicket(): void {

    const id = this.route.snapshot.paramMap.get('id');

    const val = Number.isInteger(+id);

    console.log(val);
    if (val) {
      this.ticketService.getTicketDetailById(+id)
        .subscribe((data) => {
          this.ticket = data.data;
          this.resError = data.error;
        });

    }

  }

}
