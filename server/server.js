const express = require('express');
const config = require('./config');

const morgan = require('morgan');

const server = express();

require('./config/express').init(server);

server.use(morgan('combined'));
server.get('/api', (req, res) => res.send('Server is working'));

server.listen(config.PORT);
