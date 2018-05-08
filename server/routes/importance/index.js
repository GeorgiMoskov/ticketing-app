const importanceRoutes = require('./importance.routes')

const init = (server, passport) => {
    importanceRoutes.init(server, passport);
};

module.exports = {
    init,
};