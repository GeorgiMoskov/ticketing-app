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


    constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

    public getAllTickets() {  
        return this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/all');
    };

    public getAllAssignTicketsOfLoggedUser() {  
        return this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/allAssignTo');
    };

    public getTicketDetailById(ticketId) { 
         const ticket = this.http.get<ResGeneric<TicketDetail>>('http://localhost:3001/api/tickets/detail/' + ticketId);
        return ticket;
    };

    public getAllTicketsOfTeam(teamId) {
        const tickets = this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/allOfTeam/' + teamId);
        return tickets;
    }

    public getAllAssignTicketsOfLoggedUserInTeam(teamId) {
        const tickets = this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/allAssignTo/team/' + teamId);
        return tickets;
    }

    public getAllRequesterTicketsOfLoggedUser() {
        const tickets = this.http.get<ResGeneric<Ticket[]>>('http://localhost:3001/api/tickets/requester');
        return tickets;
    }

    public createTicket(ticketObj) {
        return this.http.post<ResGeneric<string>>('http://localhost:3001/api/tickets/create', ticketObj);

      }
}
