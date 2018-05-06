export class Ticket {
    public id: number;
    public requesterId: number;
    public assignToId: number;
    public escalationContactId: number;
    public teamId: number;
    public statusId: number;
    public importanceId: number;
    public description: string;
    public deadLine: Date;
}
