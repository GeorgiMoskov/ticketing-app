const validator = require('validator');

const {
    ticketData,
} = require('./../data');

const ticketServices = {};

ticketServices.getAllTickets = async () => {
    const tickets = await ticketData.getAll();
    return tickets;
}

ticketServices.getAllTicketsOfTeam = async (teamId) => {
    const tickets = await ticketData.getAll();
    tickets.find((ticket) => ticket.teamId = teamId);

    return tickets;
};

ticketServices.getAllTicketsAssignTo = async (userId) => {
    const tickets = await ticketData.getAll();
    tickets.filter((ticket) => ticket.assignTo = userId);

    return tickets;
}

ticketServices.getTicketById = async (id) => {
    const ticket = await ticketData.getById(id);
    return ticket;
};



module.exports = {
    ticketServices,
}