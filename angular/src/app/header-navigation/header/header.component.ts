import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;
  firstName: string;
  lastName: string;

  canAccessAdminPanel: boolean;

  constructor( private authService: AuthService, private userService: UserService ) { }

  ngOnInit() {
  this.email = this.userService.getCurrentLoggedUserEmail();
  const namesObj = this.userService.getCurrentLoggedUserNames();
  this.firstName = namesObj.firstName;
  this.lastName = namesObj.lastName;

   this.canAccessAdminPanel = this.userService.getCurrentLoggedUserPrivileges().includes('canAccessAdminPanel');
  }

  logOut() {
    this.authService.logout();
  }

}
