import {
  Injectable
} from "@angular/core";
import {
  Resolve, ActivatedRouteSnapshot,
} from "@angular/router";
import {
  Observable
} from "rxjs/Observable";

import {
  ToastrService
} from "ngx-toastr";

import { TeamService } from "../teams.service";
import { ResGeneric } from "../../models/resGeneric";
import { Team } from "../../models/Team";


@Injectable()
export class GetTeamByIdResolver implements Resolve < Observable < ResGeneric<Team> > > {
  constructor(private teamService: TeamService, private toastr: ToastrService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    const teamId = route.paramMap.get('id');
    return this.teamService.getTeamById(teamId);
  }
}
