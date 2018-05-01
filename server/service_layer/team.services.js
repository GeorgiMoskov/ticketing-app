const validator = require('validator');

const {
    teamData,
} = require('./../data');

const teamServices = {};

teamServices.isTeamLeader = async (teamId, userId) => {
    const team = await teamData.getById(teamId);

    if(!team) {
        return null;
    }
    const isTeamLeader = team.teamLeaderId === userId;
    
    return isTeamLeader;
}

teamServices.isSuchTeam = async (teamId) => {

    const team = await teamData.getById(teamId);

    if(!team) {
        return false;
    }

    return true;
}

module.exports = {
    teamServices,
} 
