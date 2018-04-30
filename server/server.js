const morgan = require('morgan');

const express = require('express');
const passport = require('passport');

const config = require('./config');
const strategy = require('./config/jwt-strategy');

const server = express();
require('./config/express').init(server);

passport.use('jwt', strategy.init());

server.get('/', (req, res) => res.send('Server is working'));
require('./routes').init(server, passport);

server.listen(config.PORT);


