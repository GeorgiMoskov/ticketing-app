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
     return this.http.get <ResGetAllRolesnamesModel>('http://localhost:3001/api/roles/getAllRoles')
      
    };

}
