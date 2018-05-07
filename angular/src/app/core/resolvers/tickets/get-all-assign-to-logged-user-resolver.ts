import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";

import { ResGeneric } from "../../../models/ResGeneric";
import { TicketService } from "./../../ticket.service";
import { Ticket } from './../../../models/Ticket';

@Injectable()
export class GetAllAssignToLoggedUserResolver implements Resolve<Observable<ResGeneric<Ticket[]>>> {
    constructor(private ticketService: TicketService, private toastr: ToastrService) { }

    resolve() {
        return this.ticketService.getAllAssignTicketsOfLoggedUser();
    }
}
