const express = require('express');
const  router = express.Router();

const authController = require('./../../controllers/auth.controller');

const init = (server, passport) => {
    const controller = authController.init();

    router.post('/api/register', passport.authenticate('jwt', { session: false }), controller.register());
    router.post('/api/login', controller.login());

    server.use('/auth', router);
}

module.exports = {
    init
};