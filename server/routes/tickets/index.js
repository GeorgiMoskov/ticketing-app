const ticketRoutes = require('./ticket.routes')

const init = (server, passport) => {
    ticketRoutes.init(server, passport);
};

module.exports = {
    init,
};