const roleRoutes = require('./role.routes')

const init = (server, passport) => {
    roleRoutes.init(server, passport);
};

module.exports = {
    init,
};