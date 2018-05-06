import { Team } from "./Team";
import { Status } from "./Status";
import { Importance } from "./Importance";
import { Ticket } from "./Ticket";
import { BaseUser } from "./BaseUser";

export class TicketDetail extends Ticket {
    public requester?: BaseUser;
    public assignTo?: BaseUser;
    public escalationContact?: BaseUser;
    public team: Team;
    public status: Status;
    public importance: Importance;
    public description: string;
    public deadLine: Date;
}