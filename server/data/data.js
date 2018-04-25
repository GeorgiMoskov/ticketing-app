const {
    User,
    Role,
    Privilege,
} = require('../../db/models');

const UsersData = require('./user.data');
const RolesData = require('./role.data');

module.exports = {
    user: new UsersData(User, [{
        model: Role,
        include: [Privilege]
    }]),

    role: new RolesData(Role, [Privilege]),


    
};
