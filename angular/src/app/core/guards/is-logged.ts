import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class IsLogged implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if( this.authService.isAuth() ){
        return true;
      }else {
        this.router.navigate(['/auth']);
      }
  }
}