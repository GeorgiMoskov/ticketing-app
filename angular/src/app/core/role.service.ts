import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { ResGeneric } from '../models/resGeneric';
import { Role } from '../models/Role';

@Injectable()
export class RoleService {

  constructor(private router: Router, private http: HttpClient,  private toastr: ToastrService) {}
  
  public getAllRoles() {  // NEED FIX
    return this.http.get <ResGeneric<Role[]>>('http://localhost:3001/api/roles/getAllRoles');
      
    };

}
