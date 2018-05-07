import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { ResGeneric } from '../../models/resGeneric';
import { Team } from '../../models/Team';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { TeamDataCommunication } from '../team-service-communication/team-data-communication';
import { User } from '../../models/User';


@Injectable()
export class CanEditTeam implements CanActivate {

  constructor(private authService: AuthService,private userService: UserService, 
    private router: Router,
    private teamDataCommunication: TeamDataCommunication,
     private toastr: ToastrService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.teamDataCommunication.currentTeamData
    .map(team=>{
      if(team.teamLeaderId == this.userService.getCurrentLoggedUserId()){
        return true;
      }

      if(this.userService.getCurrentLoggedUserPrivileges().includes('canAccessAdminPanel')){
        return true;
      }
      this.router.navigate(['']);
    })
    

  //   const curLoggedUserId =  this.userService.getCurrentLoggedUserId();

  //   const curLoggedUserPrivileges = this.userService.getCurrentLoggedUserPrivileges();

  //   if(curLoggedUserPrivileges.includes('canAccessAdminPanel')){
  //     return true;
  //   }

  //   let team: Team;
  //   const resData:ResGeneric<Team> = route.parent.data['team'];
  //   console.log(route);
  //   if(!resData){
  //     this.router.navigate(['']);
  //     return false;
  //   }

  //   if(resData.error) {
  //     this.toastr.error(resData.error, '', {closeButton:true});
  //     console.log(resData.error);
  //     this.router.navigate(['']);
      
  //   }else {
  //    team = resData.data;
  //  };

  //  if(team.teamLeaderId == this.userService.getCurrentLoggedUserId()){
  //   return true;
  //  }
  //  this.toastr.error('Access Denied!', '', {closeButton:true});
  //  this.router.navigate(['']);

  }
}