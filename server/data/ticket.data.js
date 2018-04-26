const Data = require('./generic.data');

class TicketsData extends Data {
    constructor(Ticket, includes) {
        super(Ticket, includes);
    }

    convertSequelizeObjToTicketObj(ticketSequelize) {
        const ticket = {};
        ticket.id = ticketSequelize.id;
        ticket.requesterId = ticketSequelize.requesterId;
        ticket.assignToId = ticketSequelize.assignToId;
        ticket.escalationContactId = ticketSequelize.escalationContactId;
        ticket.teamId = ticketSequelize.teamId;
        ticket.statusId = ticketSequelize.statusId;
        ticket.importanceId = ticketSequelize.importanceId;
        ticket.description = ticketSequelize.description;
        ticket.deadLine = ticketSequelize.deadLine;
        
        return ticket;
    }

    async create(obj) {
        const ticketSequelize = await this.createElement(obj);

        if (!ticketSequelize) {
            return null;
        }

        const ticket = await this.getById(ticketSequelize.id)
        return ticket;
    }

    async getAll() {
        const allTicketsSequelize = await this.getAllElements();

        const allTickets = [];
        if (allTicketsSequelize && allTicketsSequelize.length > 0) {
            allTicketsSequelize.forEach(ticket => {
                allTickets.push(this.convertSequelizeObjToTicketObj(ticket));
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

        const ticket = this.convertSequelizeObjToTicketObj(ticketSequelize);
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