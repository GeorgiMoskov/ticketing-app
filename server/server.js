const express = require('express');
const config = require('./config');

const server = express();

require('./config/express').init(server);

server.get('/', (req,res)=> res.send('Server is working'));

server.listen(config.port);