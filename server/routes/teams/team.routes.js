const express = require('express');
const router = express.Router();

const teamController = require('./../../controllers/team.controller');

const init = (server, passport) => {
    const controller = teamController.init();

    router.get('/all', passport.authenticate('jwt', {
        session: false
    }), controller.getAllTeams());

    router.get('/allByUser/:userId', passport.authenticate('jwt', {
        session: false
    }), controller.getTeamsByUserId());

    router.get('/:teamId', passport.authenticate('jwt', {
        session: false
    }), controller.getTeamById());

    server.use('/api/teams', router);

}

module.exports = {
    init
};