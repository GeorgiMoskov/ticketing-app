export class resTicketModel {
    public ticket: {
        id: number,
        requesterId: number,
        assignToId: number,
        escalationContactId: number,
        teamId: number,
        statusId: number,
        importanceId: number,
        description: string,
        deadLine: Date,
    }
    public error: string;
}