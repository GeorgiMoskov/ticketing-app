const validator = require('validator');

const {
    roleData,
} = require('./../data');

const roleServices = {};

roleServices.getRoleByName = async (roleName) => {
    roleName = roleName + '';
    
    if ( !roleName || validator.isEmpty(roleName)) {
        throw 'Role name cant be empty';
    };

    const role = await roleData.getByName(roleName);

    return role;
}

module.exports = {
    roleServices,
}