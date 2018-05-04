import {
  Injectable
} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class UserService {

  constructor(private jwtService: JwtHelperService) {}
  
  public getCurrentLoggedUserNames() {
    const decodedToken = this.jwtService.decodeToken(localStorage.getItem('token'));
    return {
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName
    };
      
  };
  
  public getCurrentLoggedUserEmail() {
    const decodedToken = this.jwtService.decodeToken(localStorage.getItem('token'));
    return decodedToken.email;
      
  };

  public getCurrentLoggedUserPrivileges() {
    const decodedToken = this.jwtService.decodeToken(localStorage.getItem('token'));
    return decodedToken.privileges;
  }

  

}
