import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Team } from '../../models/Team';
import { ResGeneric } from '../../models/resGeneric';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/user.service';
import { TeamDataCommunication } from '../../core/team-service-communication/team-data-communication';

@Component({
  selector: 'app-team-panel-main',
  templateUrl: './team-panel-main.component.html',
  styleUrls: ['./team-panel-main.component.css']
})
export class TeamPanelMainComponent implements OnInit {

  public team:Team;
  public canEditTeam: boolean;

  constructor(private route: ActivatedRoute,private _router: Router, 
    private teamDataCommunication: TeamDataCommunication, 
    private userService: UserService, private toastr: ToastrService) {
    
    // RE RENDER ALL PAGES OF THIS AND CHILD COMPONENTS
    this._router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
  
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });

   }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.initTeam();
    this.canEditTeam = this.canEditTeamInit();
    this.teamDataCommunication.currentTeamData.subscribe(team=>{ 
      
    } );
  }

  initTeam(){
    const resData:ResGeneric<Team> = this.route.snapshot.data['team'];
    if(resData.error) {
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else {
     this.team =resData.data;
     this.teamDataCommunication.updateCurrentTeam(this.team);
   };
  }

  canEditTeamInit(){
    const curLoggedUserPrivileges = this.userService.getCurrentLoggedUserPrivileges();
    if(curLoggedUserPrivileges.includes('canAccessAdminPanel')){
      return true;
    }
    if( this.team.teamLeaderId == this.userService.getCurrentLoggedUserId()){
      return true;
    }
    return false;
  }

}
