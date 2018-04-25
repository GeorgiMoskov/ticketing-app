const authRoutes = require('./auth.routes');

const init = (server, passport) => {
    authRoutes.init(server, passport);
};

module.exports = {
    init,
};