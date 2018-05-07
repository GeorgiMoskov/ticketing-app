import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";

import { ResGeneric } from "../../../models/ResGeneric";
import { TicketService } from "./../../ticket.service";
import { TicketDetail } from "../../../models/TicketDetail";

@Injectable()
export class TicketDetailsByIdResolver implements Resolve<Observable<ResGeneric<TicketDetail>>> {
    constructor(private ticketService: TicketService, private toastr: ToastrService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('ticketId');
        return this.ticketService.getTicketDetailById(id);
    }
}
