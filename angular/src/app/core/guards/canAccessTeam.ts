import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { TeamService } from '../teams.service';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map"; 
import { UserService } from '../user.service';

@Injectable()
export class CanAccessTeam implements CanActivate {
  //getTeamsByLoggedUser
  constructor(private userServide: UserService, private teamService: TeamService, private router: Router, private toastr: ToastrService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
     return this.teamService.getTeamsByLoggedUser()
     .map(response => {
      let val = false;
      if (response.error) {
        // of(false)
      } else {
        if(this.userServide.getCurrentLoggedUserPrivileges().includes('canAccessAdminPanel')){
          val = true;
        } else{
          let teamId = route.paramMap.get('id');
          console.log(teamId);
          const canAccess = response.data.find(teamObj=>{
            if(teamObj.id == +teamId){
              console.log(teamObj.id);
              return true;
            }   
          });
          if(canAccess){
            val = true;
          }
        }
      }
      if(val == false){
        this.toastr.error("Access denied!", '', {closeButton:true});
        this.router.navigate(['']);
      }else{
        return val;
      }
    });
  }
}
