import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/Team';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;

  constructor(private userService: UserService) { }

  currentLoggedUserId;

  ngOnInit() {
    this.currentLoggedUserId = this.userService.getCurrentLoggedUserId();
  }


}
