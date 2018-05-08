import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { User } from '../../models/User';
import { Team } from '../../models/Team';
import { Importance } from '../../models/Importance';
import { Status } from '../../models/Status';
import { ResGeneric } from '../../models/resGeneric';
import { TeamService } from '../../core/teams.service';
import { UserService } from '../../core/user.service';
import { TicketService } from '../../core/ticket.service';
import { ImportanceService } from '../../core/importance.services';
import { StatusService } from '../../core/status.service';
import { DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  loggedUserId: Number;
  users: User[];
  teams: Team[];
  statuses: Status[];
  importances: Importance[];
  createTicketForm: FormGroup;
  public description: AbstractControl;
  public requesterId: AbstractControl;
  public assignToId: AbstractControl;
  public escalationContactId: AbstractControl;
  public teamId: AbstractControl;
  public statusId: AbstractControl;
  public importanceId: AbstractControl;
  public deadLine: AbstractControl;
  date: Date;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService,
    private ticketService: TicketService, private userService: UserService,
    private teamService: TeamService, private statusService: StatusService, private importanceService: ImportanceService) { }

  ngOnInit() {
    this.initResStatuses();
    this.initResImportances();
    this.initResUsers();
    this.initTeams();
    this.initCreateTicketForm();
    this.loggedUserId = this.userService.getCurrentLoggedUserId();

  }

  initResStatuses() {
    const resDataStatus: ResGeneric<Status[]> = this.route.snapshot.data['statuses'];
    if (resDataStatus.error) {
      this.toastr.error(resDataStatus.error, '', { closeButton: true });
    } else {
      this.statuses = resDataStatus.data;
    }
  }

  initResImportances() {
    const resDataImportance: ResGeneric<Importance[]> = this.route.snapshot.data['importances'];
    if (resDataImportance.error) {
      this.toastr.error(resDataImportance.error, '', { closeButton: true });
    } else {
      this.importances = resDataImportance.data;
    }
  }

  initResUsers() {
    const resData: ResGeneric<User[]> = this.route.snapshot.data['users'];
    if (resData.error) {
      this.toastr.error(resData.error, '', { closeButton: true });
    } else {
      this.users = resData.data;
    }
  }

  initTeams() {
    const resData: ResGeneric<Team[]> = this.route.snapshot.data['teams'];
    if (resData.error) {
      this.toastr.error(resData.error, '', { closeButton: true });
    } else {
      this.teams = resData.data;
    }
  }

  initCreateTicketForm() {
    this.createTicketForm = this.formBuilder.group({
      'description': ['', [Validators.required]],
      'requesterId': [''],
      'assignToId': [''],
      'escalationContactId': [''],
      'teamId': ['', [Validators.required]],
      'statusId': ['', [Validators.required]],
      'importanceId': ['', [Validators.required]],
      'deadLine': ['', [Validators.required]],
    });

    this.description = this.createTicketForm.controls['description'];
    this.requesterId = this.createTicketForm.controls['requesterId'];
    this.assignToId = this.createTicketForm.controls['assignToId'];
    this.escalationContactId = this.createTicketForm.controls['escalationContactId'];
    this.teamId = this.createTicketForm.controls['teamId'];
    this.statusId = this.createTicketForm.controls['statusId'];
    this.importanceId = this.createTicketForm.controls['importanceId'];
    this.deadLine = this.createTicketForm.controls['deadLine'];

  }
  dateInput(value) {
    this.date = value;  
  }
  onSubmit() {
    // if (this.createTicketForm.valid) {
      
      const ticketToCreate = {
        description: this.description.value,
        requesterId: this.requesterId.value,
        assignToId: this.assignToId.value,
        escalationContactId: this.escalationContactId.value,
        teamId: this.teamId.value,
        statusId: this.statusId.value,
        importanceId: this.importanceId.value,
        deadLine: this.date,
      };
      console.log(ticketToCreate);
      this.ticketService.createTicket(ticketToCreate).subscribe((resData: ResGeneric<string>) => {
        if (resData.error) {
          this.toastr.error(resData.error, '', { closeButton: true });
          //   console.log(resData.error);
        } else {
          this.toastr.success('Team was created!', '', { closeButton: true });
        }});

      // }
    }
  }
