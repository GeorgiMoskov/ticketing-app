const express = require('express');
const router = express.Router();

const ticketController = require('./../../controllers/ticket.controller');

const init = (server, passport) => {
    const controller = ticketController.init();

    router.get('/all', passport.authenticate('jwt', {
        session: false
    }), controller.getAllTickets());

    router.get('/allOfTeam/:teamId', passport.authenticate('jwt', {
        session: false
    }), controller.getAllTicketsOfTeam());

    router.get('/allAssignTo', passport.authenticate('jwt', {
        session: false
    }), controller.getAssignTo());

    router.get('/allAssignTo/team/:teamId', passport.authenticate('jwt', {
        session: false
    }), controller.getAssignToOfTeam());

    router.get('/allAssignTo/:userId', passport.authenticate('jwt', {
        session: false
    }), controller.getAssignToUser());

    router.get('/allAssignTo/:userId/team/:teamId', passport.authenticate('jwt', {
        session: false
    }), controller.getAssignToUserOfTeam());

    router.get('/:ticketId', passport.authenticate('jwt', {
        session: false
    }), controller.getTicketById());

    server.use('/api/tickets', router);

}

module.exports = {
    init
};