import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';


import { ResGeneric } from "./../models/ResGeneric";
import { Ticket } from '../models/Ticket';


@Injectable()
export class TicketService {

    constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

    public getAllTickets() {  
        return this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/all')
    };

    public getAllAssignTicketsOfLogedUser() {  
        return this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/allAssignTo')
    };

}
