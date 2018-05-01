import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class IsLogged implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if( this.authService.isAuth() ){
        return true;
      }else {
        this.router.navigate(['/auth']);
        this.toastr.error('Login first!', '', {closeButton:true});
      }
  }
}