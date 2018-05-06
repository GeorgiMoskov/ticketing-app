const Data = require('./generic.data');


class TicketsData extends Data {
    constructor(model, includes) {
        super(model, includes);
    }

    convertSequelizeObjToTicketObj(ticketSequelize) {
        let requesterName = '';
        let assignToName = '';
        let teamName = '';
        let escalationContactName = '';
        if (ticketSequelize.requesterId) {
            requesterName = ticketSequelize.requester.firstName + ' ' + ticketSequelize.requester.lastName;
        }
        if (ticketSequelize.assignToId) {
            assignToName = ticketSequelize.assignTo.firstName + ' ' + ticketSequelize.assignTo.lastName;
        }
        if (ticketSequelize.escalationContactId) {
            escalationContactName = ticketSequelize.escalationContact.firstName + ' ' + ticketSequelize.escalationContact.lastName;
        }
        if (ticketSequelize.teamId) {
            teamName = ticketSequelize.team.name;
        }
        const ticket = {
            id: ticketSequelize.id,
            requesterId: ticketSequelize.requesterId,
            requesterName: requesterName,
            assignToId: ticketSequelize.assignToId,
            assignToName: assignToName,
            escalationContactId: ticketSequelize.escalationContactId,
            escalationContactName: escalationContactName,
            teamId: ticketSequelize.teamId,
            teamName: teamName,
            statusId: ticketSequelize.statusId,
            statusName: ticketSequelize.status.name,
            importanceId: ticketSequelize.importanceId,
            importanceName: ticketSequelize.importance.name,
            description: ticketSequelize.description,
            deadLine: ticketSequelize.deadLine,
        }
        return ticket;
    }

    convertSequelizeDetailObjToTicketObj(ticketSequelize) {
        let team, assignTo, requester, escalationContact;

        if (ticketSequelize.team) {
            team = this.convertTeamSequelizeObjToTeamObj(ticketSequelize.team);
        }
        if (ticketSequelize.assignTo) {
            assignTo = this.convertSequelizeObjToUserObj(ticketSequelize.assignTo);
        }
        if (ticketSequelize.requester) {
            requester = this.convertSequelizeObjToUserObj(ticketSequelize.requester);
        }
        if (ticketSequelize.escalationContact) {
            escalationContact = this.convertSequelizeObjToUserObj(ticketSequelize.escalationContact);
        }

        const ticket = this.convertSequelizeObjToTicketObj(ticketSequelize);

        ticket.requester = requester;
        ticket.assignTo = assignTo;
        ticket.escalationContact = escalationContact;
        ticket.team = team;
        ticket.status = {
            id: ticketSequelize.status.id,
            name: ticketSequelize.status.name,
        };
        ticket.importance = {
            id: ticketSequelize.importance.id,
            name: ticketSequelize.importance.name,
        };

        return ticket;
    }

    convertSequelizeObjToUserObj(userSequelize) {
        const user = {};
        user.id = userSequelize.id;
        user.email = userSequelize.email;
        user.firstName = userSequelize.firstName;
        user.lastName = userSequelize.lastName;
        user.roleId = userSequelize.RoleId;

        return user;
    }

    convertTeamSequelizeObjToTeamObj(teamSequelize) {
        const team = {
            id: teamSequelize.id,
            name: teamSequelize.name,
        };

        if (teamSequelize.description) {
            team.description = teamSequelize.description
        }

        if (teamSequelize.teamLeader) {
            team.teamLeaderId = teamSequelize.teamLeader.id;
            team.teamLeaderName = teamSequelize.teamLeader.firstName + ' ' + teamSequelize.teamLeader.lastName;
        }
        if (teamSequelize.users_in_team) {
            team.users = teamSequelize.users;
        } else {
            team.users = [];
        }

        return team;
    }



    async create(obj) {
        const ticketSequelize = await this.createElement(obj);

        if (!ticketSequelize) {
            return null;
        }

        const ticket = await this.getById(ticketSequelize.id);
        return ticket;
    }

    async getAll() {
        const allTicketsSequelize = await this.getAllElements();

        const allTickets = [];
        if (allTicketsSequelize && allTicketsSequelize.length > 0) {
            allTicketsSequelize.forEach((ticket) => {
                const resObj = this.convertSequelizeObjToTicketObj(ticket);
                allTickets.push(resObj);
            });
        }

        return allTickets;
    }

    async getByEmail(email) {
        const ticketSequelize = await this.Model.findOne({
            where: {
                email: email,
            },
            include: this.includes,
        });

        if (!ticketSequelize) {
            return null;
        }

        const ticket = this.convertSequelizeObjToTicketObj(ticketSequelize);
        return ticket;
    }

    async getById(id) {
        const ticketSequelize = await this.getElementById(id);

        if (!ticketSequelize) {
            return null;
        }

        const ticket = this.convertSequelizeDetailObjToTicketObj(ticketSequelize);
        return ticket;
    }

    async update(obj, id) {
        const ticketSequelize = await this.updateElement(obj, id);

        if (!ticketSequelize) {
            return null;
        }

        const ticket = await this.getById(id)
        return ticket;
    }

    async delete(id) {

        await this.deleteElement(id);

        return null;
    }

}

module.exports = TicketsData;