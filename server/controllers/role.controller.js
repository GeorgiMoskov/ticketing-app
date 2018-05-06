const validator = require('validator');

const {
    roleServices
} = require('./../service_layer/role.services');


const init = () => {
    const getAllRolesNames = () => {
        return async (req, res) => {
            // TODO ADD PRIVILEGE canGetAllRoles to Admin
            // const canGetAllRoles = req.user.privileges.find((privilege) => privilege === 'canGetAllRoles');
            // if (!canGetAllRoles) {
            //     return res.send('you CAN NOT get all roles!');
            // }

            const allRoles = await roleServices.getAllRoles();

            const allRolesNames = allRoles.map((roleObj)=>roleObj.name);


            return res.send({
                data: allRolesNames
            });
        }
    }

    return {
        getAllRolesNames,
    }
}

module.exports = {
    init,
}