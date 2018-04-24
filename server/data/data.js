const {
    User,
    Role,
    Privilege,
} = require('../../db/models');

const Data = require('./generic.data');
const UsersData = require('./user.data');
const RolesData = require('./role.data');

module.exports = {
    user: new UsersData(User, [{model: Role, include: [Privilege]}]),
    role: new RolesData(Role, [Privilege]),
    privilege: new Data(Privilege),
};
