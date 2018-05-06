const validator = require('validator');

const {
    teamServices,
} = require('./../service_layer/team.services');

const {
    userServices,
} = require('./../service_layer/user.services');


const init = () => {

    const getAllTeams = () => {
        return async (req, res) => {

            const allTeams = await teamServices.getAllTeams();

            if (!allTeams) {
                return res.send({
                    error: 'There is no teams',
                });
            }

            return res.send({
                data: allTeams
            });
        }
    };

    const getTeamsByUserId = () => {
        return async (req, res) => {
            // is userId valid 
            if (!validator.isInt(req.params.userId)) {
                return res.send({
                    error: `You send invalid userId ${req.params.userId}.`,
                });
            }
            const userId = +req.params.userId;

            const user = await userServices.getUserById(userId);

            if (!user) {
                return res.send({
                    error: `There is no user with id ${userId}.`,
                });
            }
            if (user.teams.length === 0) {
                return res.send({
                    error: `User with id ${user.id} is not in any team`,
                });
            }

            const allTeams = await teamServices.getTeamsInfo(user.teams);

            if (!allTeams) {
                return res.send({
                    error: `User with id ${user.id} is not in any team`,
                });
            }

            return res.send({
                data: allTeams
            });
        }
    };

    const getTeamsByLogedUser = () => {
        return async (req, res) => {

            const userId = +req.user.id;
            
            if (req.user.teams.length === 0) {
                return res.send({
                    error: `User  ${req.user.firstName} ${req.user.lastName} is not participated in any team`,
                });
            }

            const allTeams = await teamServices.getTeamsInfo(req.user.teams);

            if (!allTeams) {
                return res.send({
                    error: `User with id ${user.id} is not in any team`,
                });
            }

            return res.send({
                data: allTeams
            });
        }
    };

    const getTeamById = () => {
        return async (req, res) => {
            // is teamId valid 
            if (!validator.isInt(req.params.teamId)) {
                return res.send({
                    error: `You send invalid teamId ${req.params.teamId}`,
                });
            }
            const teamId = +req.params.teamId;
            const team = await teamServices.getTeamById(teamId);

            if (!team) {
                return res.send({
                    error: 'There is no such team',
                });
            }

            return res.send({
                data: team
            });
        }
    };


    return {
        getAllTeams,
        getTeamsByUserId,
        getTeamById,
        getTeamsByLogedUser
    }
}

module.exports = {
    init,
}