const validator = require('validator');

const {
    userServices
} = require('./../service_layer/user.services');

const {
    teamServices,
} = require('./../service_layer/team.services');

const init = () => {

    const getAllUsers = () => {
        return async (req, res) => {

            const users = await userServices.getAllUsers();
            // should validate and guard route
            if (!users) {
                return res.send({
                    error: `There is no user in the system.`,
                });
            }

            return res.send({
                data: users,
            });

        }
    };

    const getAllUsersOfTeam = () => {
        return async (req, res) => {
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

            if (team.users.length === 0) {
                return res.send({
                    error: `The team with id ${team.id} has no members right now.`,
                });
            }

            const users = await userServices.getUsersInfo(team.users);
            if (!users) {
                return res.send({
                    error: `The team with id ${team.id} has no members right now.`,
                });
            }

            return res.send({
               data: users
            });
        }
    };


    const getLogedUserInfo = () => {
        return async (req, res) => {
            return res.send({
                data: req.user
            });
        }
    };

    const deleteUsersById = () => {
        return async (req, res) => {
            if (!req.user.privileges.includes('canDeleteUser')) {
                return res.send({
                    error: 'you CAN NOT delete other users'
                });
            }
            let userId = req.body.userId;

            if (!userId || !validator.isInt(userId + '')) {
                return res.send({
                    error: 'user Id to delte is not valid'
                });
            }

            userId = +userId;

            if (req.user.id == userId) {
                return res.send({
                    error: 'you CAN NOT delete yourself'
                });
            }

            try {
                const deletedUser = await userServices.deleteUserById(userId);
            } catch (er) {
                return res.send({
                    error: 'There was error on server',
                })
            }

            return res.send({
                data: 'User was deleted',
            })



        }
    }

    return {
        getAllUsers,
        getLogedUserInfo,
        getAllUsersOfTeam,
        deleteUsersById
    }

}

module.exports = {
    init,
}