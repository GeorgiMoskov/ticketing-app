import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResGetAllRolesnamesModel } from '../models/resGetAllRolesnamesModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleService {

  constructor(private router: Router, private http: HttpClient,  private toastr: ToastrService) {}
  
  public getAllRoles() {  // NEED FIX
     this.http.get <ResGetAllRolesnamesModel>('http://localhost:3001/api/roles/getAllRoles')
      .subscribe((data) => {
        console.log(data);
        if(data.error) {
          this.toastr.error(data.error, '', {closeButton:true});
          console.log(data.error);
        } else {
          return data.allRolesNames;
        };
      }, 
      (err) => {
        this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
        console.log('Server Error, Please, try again or later!');
      });

    };

}
