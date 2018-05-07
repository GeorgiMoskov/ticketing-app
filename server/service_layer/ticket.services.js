const validator = require('validator');

const {
    ticketData,
} = require('./../data');

const ticketServices = {};

ticketServices.getAllTickets = async () => {
    const tickets = await ticketData.getAll();

    if (!tickets) {
        return null;
    }
    return tickets;
}

ticketServices.getAllTicketsOfTeam = async (teamId) => {
    const tickets = await ticketData.getAll();

    if (!tickets) {
        return null;
    }
    const teamTickets = tickets.filter((ticket) => ticket.teamId && ticket.teamId === teamId);

    return teamTickets;
};

ticketServices.getAllTicketsAssignTo = async (userId) => {
    const tickets = await ticketData.getAll();
    if (!tickets) {
        return null;
    }
    const userTickets = tickets.filter((ticket) => ticket.assignToId && ticket.assignToId === userId);

    return userTickets;
}

ticketServices.getAllTicketsRequester = async (userId) => {
    const tickets = await ticketData.getAll();
    if (!tickets) {
        return null;
    }
    const userTickets = tickets.filter((ticket) =>  ticket.requesterId && ticket.requesterId === userId);

    return userTickets;
}

ticketServices.getAllTicketsAssignToOfTeam = async (teamId, userId) => {
    const tickets = await ticketData.getAll();
    if (!tickets) {
        return null;
    }
    const userTickets = tickets.filter((ticket) => ticket.assignToId === userId && ticket.teamId === teamId);

    return userTickets;
}

ticketServices.getTicketById = async (id) => {
    const ticket = await ticketData.getById(id);

    if (!ticket) {
        return null;
    }
    return ticket;
};



module.exports = {
    ticketServices,
}