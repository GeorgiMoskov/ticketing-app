import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../models/Team';
import { ResGeneric } from '../../models/resGeneric';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team-panel-main',
  templateUrl: './team-panel-main.component.html',
  styleUrls: ['./team-panel-main.component.css']
})
export class TeamPanelMainComponent implements OnInit {

  public team;

  constructor(private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.initTeam();
    console.log(this.team);
    
  }

  initTeam(){
    const resData:ResGeneric<Team> = this.route.snapshot.data['team'];
    if(resData.error) {
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else {
     this.team =resData.data;
   };
  }

}
