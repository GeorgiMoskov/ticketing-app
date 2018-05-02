const validator = require('validator');

const {
    teamServices,
} = require('./../service_layer/team.services');


const init = () => {

    const getAllTeams = () => {
        return async (req, res) => {

        const allTeams = await teamServices.getAllTeams();
        
        if(!allTeams) {
            return res.send({
                error: 'There is no teams',
            });
        }

        return res.send(allTeams);
      }
    };

    const getTeamsByUserId = () => {
        return async (req, res) => {

        const userId = +req.params.userId;

        const allTeams = await teamServices.getTeamsByUserId(userId);
        
        if(!allTeams) {
            return res.send({
                error: `User with id ${userId} is not in any team`,
            });
        }

        return res.send(allTeams);
      }
    };

    const getTeamById = () => {
        return async (req, res) => {

        const teamId = +req.params.teamId;
        const team = await teamServices.getTeamById(teamId);
        
        if(!team) {
            return res.send({
                error: 'There is no such team',
            });
        }

        return res.send(team);
      }
    };


    return {
        getAllTeams,
        getTeamsByUserId,
        getTeamById
    }
}

module.exports = {
    init,
}