import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../../core/teams.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-change-team-leader',
  templateUrl: './change-team-leader.component.html',
  styleUrls: ['./change-team-leader.component.css']
})
export class ChangeTeamLeaderComponent implements OnInit {

  displayedColumns = ['id', 'email', 'firstName', 'lastName', 'role', 'delete'];
  dataSource;
  @Input() users;
  @Input() team;

  constructor(private teamService: TeamService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  changeTeamLeader(userId){
    // this.router.navigate(['dashboard','team-panel',this.team.id]);

    this.teamService.changeTeamLeaderOfTeam(userId, this.team.id)
    .subscribe((resData: ResGeneric<string>) => {
      if(resData.error) {
        this.toastr.error(resData.error, '', {closeButton:true});
        console.log(resData.error);
      } else {
        this.toastr.success('TeamLeader was Canged!', '', {closeButton:true});
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
