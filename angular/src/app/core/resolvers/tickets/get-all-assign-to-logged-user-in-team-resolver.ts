import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";

import { ResGeneric } from "../../../models/ResGeneric";
import { TicketService } from "./../../ticket.service";
import { Ticket } from './../../../models/Ticket';

@Injectable()
export class GetAllAssignToTicketsOfLoggedUserInTeamResolver implements Resolve<Observable<ResGeneric<Ticket[]>>> {
    constructor(private ticketService: TicketService, private toastr: ToastrService) { }

    resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('teamId');
        return this.ticketService.getAllAssignTicketsOfLoggedUserInTeam(id);
    }
}
