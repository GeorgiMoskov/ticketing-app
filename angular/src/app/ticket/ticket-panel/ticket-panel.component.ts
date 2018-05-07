import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.css']
})
export class TicketPanelComponent implements OnInit {

  public currentLoggedUserId;
  public currentLoggedUserPrivileges;
  public canViewAllTickets: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentLoggedUserId = this.userService.getCurrentLoggedUserId();
    this.currentLoggedUserPrivileges = this.userService.getCurrentLoggedUserPrivileges();
    if(this.currentLoggedUserPrivileges.includes('canAccessAdminPanel')) {
      this.canViewAllTickets = true;
    }
  }

}
