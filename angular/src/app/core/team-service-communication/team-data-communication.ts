import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Team } from "../../models/Team";



@Injectable()
export class TeamDataCommunication {

    private teamData = new BehaviorSubject<Team>({
        id: null,
        name: null,
        description: null,
        users: null,
        teamLeaderName: null,
        teamLeaderId: null,
    })

    currentTeamData = this.teamData.asObservable();

    constructor() {}

    updateCurrentTeam(team: Team) {
        this.teamData.next(team);
    }

}