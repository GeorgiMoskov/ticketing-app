const express = require('express');
const  router = express.Router();
const ticketController =  require('./../controllers/ticket.controller');

    const init = (server, passport) => {
        const controller = ticketController.init();
        server.use('/api/ticket', router);
        router.get('/all', controller.getAllTickets());

}

module.exports = {
    init
};