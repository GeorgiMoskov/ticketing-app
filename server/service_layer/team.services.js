const validator = require('validator');

const {
    teamData,
    userData
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

teamServices.getTeamsInfo = async (teamsIdArr) => {
    const teams =[];
    await Promise.all(
        [...teamsIdArr].map(async (teamId) => {
        const team = await teamData.getById(teamId);
            if(team) {
                teams.push(team);
            }
        }));
        
        if (teams.length === 0) {
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

teamServices.getTeamByName = async (teamName) => {
    const team = await teamData.getByName(teamName);

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

    return await teamData.isExistInDb(teamId);
}

teamServices.createTeam = async (teamObj) => {
    if(await teamData.getByName(teamObj.name)){
        throw "Team with this name allready exists"
    }
    return await teamData.create(teamObj);
}

teamServices.updateTeamLeader = async(userId, teamId) =>{
    if(!await userData.getById(userId)){
        throw "This user doesn't exist";
    }

    if(!await teamServices.getTeamById(teamId)){
        throw "This team doesn't exist";
    }

    try{
        await teamData.update(
            {
                teamLeaderId: +userId,
            }, teamId ); 
    } catch(err){
        throw err;
    }
    return 'New Team leader is set';
}

module.exports = {
    teamServices,
}