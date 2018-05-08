const express = require('express');
const router = express.Router();

const importanceController = require('./../../controllers/importance.controller');

const init = (server, passport) => {
    const controller = importanceController.init();

    router.get('/all', passport.authenticate('jwt', {session: false} ), controller.getAllImportances());

    server.use('/api/importance', router);

}

module.exports = {
    init
};