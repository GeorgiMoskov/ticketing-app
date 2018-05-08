const statusRoutes = require('./status.routes')

const init = (server, passport) => {
    statusRoutes.init(server, passport);
};

module.exports = {
    init,
};