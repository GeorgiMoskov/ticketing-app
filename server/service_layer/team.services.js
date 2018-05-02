const validator = require('validator');

const {
    teamData,
} = require('./../data');

const {userServices } = require('./user.services');

const teamServices = {};

teamServices.getAllTeams = async () => {
    const teams = await teamData.getAll();

    if (!teams) {
        return null;
    }

    return teams;
}

teamServices.getTeamsByUserId = async (userId) => {
    const user = await userServices.getUserById(userId);

    if (!user) {
        return null;
    }
    const teams = await user.getTeams();

    if(!teams) {
        return null;
    }

    return teams;
}

teamServices.getTeamById = async (teamId) => {
    const team = await teamData.getById(teamId);

    if (!team) {
        return null;
    }
    return team;

}
teamServices.isTeamLeader = async (teamId, userId) => {
    const team = await teamData.getById(teamId);

    if (!team) {
        return null;
    }
    const isTeamLeader = team.teamLeaderId === userId;

    return isTeamLeader;
}

teamServices.isSuchTeam = async (teamId) => {

    const team = await teamData.getById(teamId);

    if (!team) {
        return false;
    }

    return true;
}

module.exports = {
    teamServices,
}