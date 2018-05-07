import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/Team';
import { UserService } from '../../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;

  constructor(private router: Router, private userService: UserService) { }

  public currentLoggedUserId;
  public currentLoggedUserPrivileges;
  public canViewAllTeam: boolean = false;

  ngOnInit() {
    this.currentLoggedUserId = this.userService.getCurrentLoggedUserId();
    this.currentLoggedUserPrivileges = this.userService.getCurrentLoggedUserPrivileges();
    if(this.currentLoggedUserPrivileges.includes('canAccessAdminPanel')) {
      this.canViewAllTeam = true;
    }
  }

  btnClicked(teamId){
    const path = this.router.url.split('/');

    if(path.includes('teams') && (path.includes('all-teams') || path.includes('my-teams'))) {
      this.router.navigateByUrl('/dashboard/team-panel/'+teamId);
    } else {
      this.router.navigateByUrl(this.router.url + '/'+ teamId);
    }
  
  }


}
