import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Team } from '../../models/Team';
import { resTeams } from '../../models/resTeams';
import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  teams: Team[];

  constructor(private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.initAllTeams();
  }

  initAllTeams(){
    const resData:ResGeneric<Team[]> = this.route.snapshot.data['teams'];
    console.log(resData);
    if(resData.error) {
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else {
     this.teams =resData.data;
   };
  }

}
