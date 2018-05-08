const express = require('express');
const router = express.Router();

const statusController = require('./../../controllers/status.controller');

const init = (server, passport) => {
    const controller = statusController.init();

    router.get('/all', passport.authenticate('jwt', {session: false} ), controller.getAllStatuses());

    server.use('/api/status', router);

}

module.exports = {
    init
};