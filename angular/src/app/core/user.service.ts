import {
  Injectable
} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { resUserModel } from '../models/resUserModel';
import { ResGetAllUsersModel } from '../models/resGetAllUsersModel';

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
  }

  public registerNewUser(userToCreate) {
    this.http.post <resUserModel> ('http://localhost:3001/auth/api/register', {userToCreate: userToCreate})
      .subscribe((data) => {
        console.log('tva se vurna!!');
        console.log(data);
        if(data.error) {
          this.toastr.error(data.error, '', {closeButton:true});
          console.log(data.error);
        } else {
          console.log(data.user);
          this.toastr.success('New User is registered!', '', {closeButton:true});
        };
      }, 
      (err) => {
        console.log(err);
        this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
        console.log('Server Error, Please, try again or later!');
      });
  }

  public deleteUser(userId) {
    return this.http.post<{error:string, success:string}> ('http://localhost:3001/api/users/deleteUser', {userId: userId});
  }

  public getAllUsers() {
    return this.http.get <ResGeneric<User[]>> ('http://localhost:3001/api/users/all');
  }

  

}
