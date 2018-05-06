import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';


import { ResGeneric } from "./../models/ResGeneric";
import { Ticket } from '../models/Ticket';
import { TicketDetail } from '../models/TicketDetail';


@Injectable()
export class TicketService {

    private apiUrl = 'http://localhost:3001/api/tickets/';

    constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

    public getAllTickets() {  
        return this.http.get<ResGeneric<Ticket[]>>(this.apiUrl+'all');
    };

    public getAllAssignTicketsOfLogedUser() {  
        return this.http.get<ResGeneric<Ticket[]>>(this.apiUrl+'allAssignTo');
    };

        public getTicketDetailById(id: number) { 
            const ticket = this.http.get<ResGeneric<TicketDetail>>(this.apiUrl + id);
        return ticket;
    };


}
