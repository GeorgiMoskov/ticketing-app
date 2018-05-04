const express = require('express');
const  router = express.Router();
const userController =  require('./../../controllers/user.controller');

    const init = (server, passport) => {
        const controller = userController.init();

        router.get('/all', passport.authenticate('jwt', { session: false }), controller.getAllUsers());

        router.get('/', passport.authenticate('jwt', { session: false }), controller.getLogedUserInfo());

        router.get('/allOfTeam/:teamId', passport.authenticate('jwt', { session: false }), controller.getAllUsersOfTeam());

        router.post('/deleteUser', passport.authenticate('jwt', { session: false }), controller.deleteUsersById());

        server.use('/api/users', router);

}

module.exports = {
    init
};