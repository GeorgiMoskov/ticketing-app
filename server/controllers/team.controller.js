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
            console.log(allTeams);
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

    const createTeam = () => {
        return async (req, res) => {
            const teamData = req.body;
            const teamToCreate = {};

            if (!teamData.name) {
                return res.send({
                    error: "Name of the team cannot be empty",
                })
            }
            teamToCreate.name = teamData.name;

            if (teamData.description) {
                teamToCreate.description = teamData.description;
            }

            if (!teamData.teamLeaderId) {
                return res.send({
                    error: "TeamLeader is not set",
                });
            }

            if (!await userServices.isSuchUser(teamData.teamLeaderId)) {
                return res.send({
                    error: "This TeamLeader doesn't exist",
                })
            }
            teamToCreate.teamLeaderId = teamData.teamLeaderId;

            let createdTeam;
            try {
                createdTeam = await teamServices.createTeam(teamToCreate);
            } catch (err) {
                console.log(err);
                return res.send({
                    error: err,
                })
            }
            
            console.log(createdTeam);

            try {
                await userServices.addTeamToUser(createdTeam.teamLeaderId, createdTeam.id);
            } catch (err) {
                return res.send({
                    error: err,
                })
            }

            console.log(await teamServices.getTeamById(createdTeam.id))

            return res.send({
                message: "Team is Created",
            })

        }
    };

    return {
        getAllTeams,
        getTeamsByUserId,
        getTeamById,
        getTeamsByLogedUser,
        createTeam
    }

};

module.exports = {
    init,
}