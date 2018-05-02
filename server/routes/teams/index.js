const teamRoutes = require('./team.routes')

const init = (server, passport) => {
    teamRoutes.init(server, passport);
};

module.exports = {
    init,
};