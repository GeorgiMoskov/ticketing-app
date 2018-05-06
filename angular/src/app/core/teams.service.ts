import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { resTeams } from '../models/resTeams';
import { Observable } from 'rxjs/Observable';
import { ResGeneric } from '../models/resGeneric';
import { Team } from '../models/Team';

@Injectable()
export class TeamService {

  constructor(private router: Router, private http: HttpClient,  private toastr: ToastrService) {}
  
  public getAllTeams() {  
     return this.http.get <ResGeneric<Team[]>> ('http://localhost:3001/api/teams/All')
    };

  public getTeamById(teamId) {
    return this.http.get <ResGeneric<Team>> ('http://localhost:3001/api/teams/'+teamId);
  }

  public getTeamsByLoggedUser() {
    return this.http.get <ResGeneric<Team[]>> ('http://localhost:3001/api/teams/allByLogedUser')
  }

  public createTeam(teamObj) {
    return this.http.post <ResGeneric<string>> ('http://localhost:3001/api/teams/createTeam', teamObj);
      
  }
}
