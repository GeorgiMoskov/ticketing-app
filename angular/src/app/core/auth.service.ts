import {
  Injectable
} from '@angular/core';
import {
  JwtHelperService
} from '@auth0/angular-jwt';
import {
  ReqUserLoginModel
} from '../models/users/reqUserLoginModel';
import {
  Observable
} from 'rxjs/Observable';
import {
  ResAccessTokenModel
} from '../models/core/resAccessTokenModel';
import {
  HttpClient
} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtHelperService, private http: HttpClient) {}

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

  public login(user: ReqUserLoginModel): Observable < ResAccessTokenModel > {
    return this.http.post < ResAccessTokenModel > ('http://localhost:3001/auth/api/login', user);
  }

}
