const morgan = require('morgan');
const cors = require('cors');

const express = require('express');
const passport = require('passport');

const config = require('./config');
const strategy = require('./config/jwt-strategy');

const server = express();
require('./config/express').init(server);

server.use(cors());

passport.use('jwt', strategy.init());

server.get('/', (req, res) => res.send('Server is working'));
require('./routes').init(server, passport);

server.listen(config.PORT);

const {
    teamServices
} = require('./service_layer/team.services');


// teamServices.updateTeamLeader(5,2);


// kor = async () => {
//     try {
//         const team = await teamServices.createTeam({
//             name: "Glue1234",
//             teamLeaderId: 222,
//         });
//         console.log('successfuly');
//         console.log(team);
//     } catch (err) {
//         console.log(err);
//     }
// }

// kor().then((kor)=>{
    
// })
