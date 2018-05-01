import {
  Injectable
} from '@angular/core';
import {
  JwtHelperService
} from '@auth0/angular-jwt';
import {
  Observable
} from 'rxjs/Observable';
import {
  ResAccessTokenModel
} from '../models/core/resAccessTokenModel';
import {
  HttpClient
} from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtHelperService, private router: Router, private http: HttpClient,  private toastr: ToastrService) {}

  public isAuth(): boolean {
    try {
      const token = this.jwtService.tokenGetter();

      if (token && !this.jwtService.isTokenExpired(token)) {
        return true;
      }

      return false;

    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public login(email:string, password: string) {

    const user = {
      email: email,
      password: password
    };

    this.http.post <ResAccessTokenModel> ('http://localhost:3001/auth/api/login', user)
      .subscribe((data) => {

        if(data.error) {
          this.toastr.error(data.error, '', {closeButton:true});
          console.log(data.error);
        } else {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard']);
          this.toastr.success('You are logged in!', '', {closeButton:true});
        };
      }, 
      (err) => {
        this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
        console.log('Server Error, Please, try again or later!');
      });

    };

}
