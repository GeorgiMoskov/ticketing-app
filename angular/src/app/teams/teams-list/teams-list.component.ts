import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  @Input() teams: Team[];

  constructor() { }

  ngOnInit() {
  }

}
