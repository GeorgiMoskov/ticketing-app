export class Ticket {
    public id: number;
    public requesterId?: number;
    public requesterName?: string;
    public assignToId?: number;
    public assignToName?: string;
    public escalationContactId?: number;
    public escalationContactName?: string;
    public teamId: number;
    public teamName: string;
    public statusId: number;
    public statusName: string;
    public importanceId: number;
    public importanceName: string;
    public description?: string;
    public deadLine: Date;
}
