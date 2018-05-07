import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Team } from '../../models/Team';
import { Router } from '@angular/router';
import { UserService } from '../../core/user.service';
import { ResGeneric } from '../../models/resGeneric';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user-to-team',
  templateUrl: './add-user-to-team.component.html',
  styleUrls: ['./add-user-to-team.component.css']
})
export class AddUserToTeamComponent implements OnInit {

  displayedColumns = ['id', 'email', 'firstName', 'lastName', 'role', 'delete'];
  dataSource;
  @Input() users;
  @Input() team;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  addUser(userId){
    // this.router.navigate(['dashboard','team-panel',this.team.id]);

    this.userService.adUserByIdToTeam(userId, this.team.id).subscribe((resData: ResGeneric<string>) => {
      if(resData.error) {
        this.toastr.error(resData.error, '', {closeButton:true});
        console.log(resData.error);
      } else {
        this.toastr.success('User was Added!', '', {closeButton:true});
        this.router.navigate(['dashboard','team-panel',this.team.id]);
        // this.users = this.users.filter((userObj)=> userObj.id != userId);
        // this.dataSource = new MatTableDataSource(this.users);
      };
    }, 
    (err) => {
      console.log(err);
      this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
      console.log('Server Error, Please, try again or later!');
    });
    return false;
  }

}
