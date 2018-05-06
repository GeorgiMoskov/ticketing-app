const Data = require('./generic.data');

class TeamsData extends Data {
    constructor(model, includes) {
        super(model, includes);
    }

    convertTeamSequelizeObjToTeamObj(teamSequelize) {
        const team = {
            id: teamSequelize.id,
            name: teamSequelize.name,
        };

        if (teamSequelize.description) {
            team.description = teamSequelize.description
        }

        if (teamSequelize.teamLeader) {
            team.teamLeaderId = teamSequelize.teamLeader.id;
            team.teamLeaderName = teamSequelize.teamLeader.firstName + ' ' + teamSequelize.teamLeader.lastName;
        }
        if (teamSequelize.users_in_team) {
            team.users = teamSequelize.users_in_team.map((user) => user.id);
        } else {
            team.users = [];
        }

        return team;
    }

    async create(obj) {

        const teamSequelize = await this.createElement(obj);

        if (!teamSequelize) {
            return null;
        }

        const team = await this.getById(teamSequelize.id)
        
        const resteam = this.convertTeamSequelizeObjToTeamObj(team);
        return {
            data: resteam,
        };
    }

    async getAll() {
        const allTeamsSequelize = await this.getAllElements();

        const allTeams = [];
        if (allTeamsSequelize && allTeamsSequelize.length > 0) {
            allTeamsSequelize.forEach(team => {
                allTeams.push(this.convertTeamSequelizeObjToTeamObj(team));
            });
        }

        return allTeams;
    }

    async getById(id) {
        const teamSequelize = await this.getElementById(id);

        if (!teamSequelize) {
            return null;
        }

        const team = this.convertTeamSequelizeObjToTeamObj(teamSequelize);
        return team;
    }

    async update(obj, id) {
        const teamSequelize = await this.updateElement(obj, id);

        if (!teamSequelize) {
            return null;
        }

        const team = await this.getById(id)
        return team;
    }


    async delete(id) {

        await this.deleteElement(id);

        return null;
    }

}

module.exports = TeamsData;