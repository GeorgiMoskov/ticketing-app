import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResGeneric } from '../../models/resGeneric';
import { Team } from '../../models/Team';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/user.service';
import { User } from '../../models/User';
import { MatDialog } from '@angular/material';
import { AddUserToTeamComponent } from '../add-user-to-team/add-user-to-team.component';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(private route: ActivatedRoute,private userService: UserService, private toastr: ToastrService, public dialog: MatDialog) { }
  public team:Team;
  public allUsers: User[];
  public teamUsers: User[];
  public showAddUserToTeam: boolean = false;
  public showRemoveUserFromTeam: boolean = false;
  public showChangeTeamLeader: boolean = false;

  ngOnInit() {
    this.initTeam();
    console.log(this.team);
    this.initUsers();
    console.log('a');
    console.log(this.allUsers);
    this.initTeamUsers();
    console.log('b');
    console.log(this.teamUsers);

  }

  initUsers() {
    const resData: ResGeneric<User[]> = this.route.snapshot.data['allUsers'];
    console.log('pri initUser');
    if(resData.error){
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else{
      this.allUsers = resData.data;
      console.log(this.allUsers);
    }
  }

  initTeamUsers() {
    this.teamUsers = this.allUsers.filter(userObj=>{
      return userObj.teams.includes(this.team.id);
    })
  }

  initTeam(){
    const resData:ResGeneric<Team> = this.route.parent.snapshot.data['team'];
    console.log('pri initTeam');
    if(resData.error) {
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else {
     this.team =resData.data;
   };
  }

  openAddNewUser(): void {
    this.showAddUserToTeam = true;
    this.showRemoveUserFromTeam = false;
    this.showChangeTeamLeader = false;
  }

  openRemoveUserFromTeam(): void {
    this.showRemoveUserFromTeam = true;
    this.showAddUserToTeam = false;
    this.showChangeTeamLeader = false;
  }

  openChangeTeamLeader(): void {
    this.showChangeTeamLeader = true;
    this.showRemoveUserFromTeam = false;
    this.showAddUserToTeam = false;
  }

}
