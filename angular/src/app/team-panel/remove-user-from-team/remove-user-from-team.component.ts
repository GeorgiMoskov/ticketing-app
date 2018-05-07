import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../core/user.service';
import { ResGeneric } from '../../models/resGeneric';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-user-from-team',
  templateUrl: './remove-user-from-team.component.html',
  styleUrls: ['./remove-user-from-team.component.css']
})
export class RemoveUserFromTeamComponent implements OnInit {
  displayedColumns = ['id', 'email', 'firstName', 'lastName', 'role', 'delete'];
  dataSource;
  @Input() users;
  @Input() team;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  removeUser(userId){
    this.userService.removeUserFromTeam(userId, this.team.id).subscribe((resData: ResGeneric<string>) => {
      if(resData.error) {
        this.toastr.error(resData.error, '', {closeButton:true});
        console.log(resData.error);
      } else {
        this.toastr.success('User was removed!', '', {closeButton:true});
        this.router.navigate(['dashboard','team-panel',this.team.id]);
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
