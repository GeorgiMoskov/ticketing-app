const validator = require('validator');

const {
    userServices
} = require('./../service_layer/user.services');

const init = () => {

    const getAllUsers = () => {
        return async (req, res) => {

            const users = await userServices.getAllUsers();
            // should validate and guard route
            if(!users) {
                return res.send({
                    error: `There is no user in the system.`,
                });
            }

            return res.send(users);
               
        }
    };

    const getLogedUserInfo = () => {
        return async (req, res) => {
            return res.send(req.user);

        }
    };

    return {
        getAllUsers,
        getLogedUserInfo
    }

}

module.exports = {
    init,
}