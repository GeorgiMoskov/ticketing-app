import {
  Injectable
} from "@angular/core";
import {
  Resolve
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
export class GetAllTeamsResolver implements Resolve < Observable < ResGeneric<Team[]> > > {
  constructor(private teamService: TeamService, private toastr: ToastrService) {}

  resolve() {
    return this.teamService.getAllTeams();
  }
}
