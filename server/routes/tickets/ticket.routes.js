const express = require('express');
const router = express.Router();

const ticketController = require('./../../controllers/ticket.controller');

const init = (server, passport) => {
    const controller = ticketController.init();

    router.get('/all', passport.authenticate('jwt', {
        session: false
    }), controller.getAllTickets());

    router.get('/allOfTeam', passport.authenticate('jwt', {
        session: false
    }), controller.getAllTicketsOfTeam());

    server.use('/api/tickets', router);

}

module.exports = {
    init
};