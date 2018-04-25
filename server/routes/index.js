const fs = require('fs');
const path = require('path');

const init = (server, passport) => {
    /** dynamically load all routes */
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        // relative to absolute path
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            const route = require(modulePath);
            route.init(server, passport);
        });


    server.use(function(req, res, next) {
        res.status(404).send('error 404');
    });
};

module.exports = {
    init,
};