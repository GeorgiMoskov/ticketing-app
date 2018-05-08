import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../core/user.service';
import { StatusService } from '../../core/status.service';
import { ImportanceService } from '../../core/importance.services';
import { ResGeneric } from '../../models/resGeneric';
import { Status } from '../../models/Status';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Importance } from '../../models/Importance';

@Component({
  selector: 'app-ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.css']
})
export class TicketPanelComponent implements OnInit {

  public currentLoggedUserId;
  public currentLoggedUserPrivileges;
  public canViewAllTickets: boolean = false;

  statuses: Status[];
  importances: Importance[];

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private userService: UserService, private statusService: StatusService,
    private importanceService: ImportanceService) { }

  ngOnInit() {

    this.currentLoggedUserId = this.userService.getCurrentLoggedUserId();
    this.currentLoggedUserPrivileges = this.userService.getCurrentLoggedUserPrivileges();
    if (this.currentLoggedUserPrivileges.includes('canAccessAdminPanel')) {
      this.canViewAllTickets = true;
    }
  }

  

}
