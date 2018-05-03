const express = require('express');
const router = express.Router();

const roleController = require('./../../controllers/role.controller');

const init = (server, passport) => {
    const controller = roleController.init();

    router.get('/getAllRoles', passport.authenticate('jwt', {session: false} ), controller.getAllRolesNames());

    server.use('/api/roles', router);

}

module.exports = {
    init
};