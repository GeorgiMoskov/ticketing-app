const userRoutes = require('./user.routes')

const init = (server, passport) => {
    userRoutes.init(server, passport);
};

module.exports = {
    init,
};