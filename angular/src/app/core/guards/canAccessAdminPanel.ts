import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Injectable()
export class canAccessAdminPanel implements CanActivate {

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.userService.getCurrentLoggedUserPrivileges().includes('canAccessAdminPanel')){
        return true;
      }else{
        this.router.navigate(['']);
        this.toastr.error("Access denied!", '', {closeButton:true});
      }
  }
}