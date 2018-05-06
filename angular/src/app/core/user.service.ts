import {
  Injectable
} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ResGeneric } from '../models/resGeneric';
import { User } from '../models/User';

import { ResGeneric } from '../models/ResGeneric';
import { User } from '../models/User';


@Injectable()
export class UserService {

  constructor(private jwtService: JwtHelperService, private http: HttpClient, private toastr: ToastrService) {}
  
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
  };

  public getCurrentLoggedUserId() {
    const decodedToken = this.jwtService.decodeToken(localStorage.getItem('token'));
    return decodedToken.sub;
  }

  public getCurrentLoggedUserTeamsIds() {
    const decodedToken = this.jwtService.decodeToken(localStorage.getItem('token'));
    return decodedToken.teams;
  }

  public registerNewUser(userToCreate) {
    this.http.post <ResGeneric<User>> ('http://localhost:3001/auth/api/register', {userToCreate: userToCreate})
      .subscribe((resData) => {
        console.log(resData);
        if(resData.error) {
          this.toastr.error(resData.error, '', {closeButton:true});
          console.log(resData.error);
        } else {
          console.log(resData.data);
          this.toastr.success('User with email: '+ resData.data.email +' is registered!', '', {closeButton:true});
        };
      }, 
      (err) => {
        console.log(err);
        this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
        console.log('Server Error, Please, try again or later!');
      });
  }

  public deleteUser(userId) {
    return this.http.post<ResGeneric<string>> ('http://localhost:3001/api/users/deleteUser', {userId: userId});
  }

  public getAllUsers() {
    return this.http.get <ResGeneric<User[]>> ('http://localhost:3001/api/users/all');
  }

  

}
