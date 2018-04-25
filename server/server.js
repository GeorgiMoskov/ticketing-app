const express = require('express');
const passport = require('passport');

const config = require('./config');
const { userService } = require('./service_layer/user.service');
const strategy = require('./config/jwt-strategy');


const server = express();
require('./config/express').init(server);

passport.use('jwt', strategy.init());


server.get('/test', passport.authenticate('jwt', { session: false }), (req, res)=>{
    console.log('...................');
    console.log(req.user);
    res.send({authenticated: true});
})

server.get('/', (req, res) => res.send('Server is working'));

require('./routes').init(server, passport);



server.listen(config.PORT);


const solveAll = async () => {

    allUsers =await userService.getAllUsers();
    console.log(allUsers);

};
 
Promise.resolve(solveAll());