const express = require('express');
const  router = express.Router();
const ticketController =  require('./../controllers/ticket.controller');

    const init = (server, passport) => {
        const controller = ticketController.init();

        router.get('/all', passport.authenticate('jwt', { session: false }), controller.getAllTickets());

        server.use('/api/ticket', router);

}

module.exports = {
    init
};