const express = require('express');
const config = require('./config');

const {
    userService
} = require('./service_layer/user.service');


// const {
//     privilegeData
// } = require('./data_layer/privilege.data');

const server = express();

require('./config/express').init(server);

server.get('/', (req, res) => res.send('Server is working'));

server.listen(config.PORT);


const solveAll = async () => {
    let allUsers =await userService.getAllUsers();
    console.log(allUsers);
    const createdUser = await userService.createUser({
        email: 'testMail@abv.bg',
        password: 'test',
        firstName: 'JOJO',
        lastName: 'Kogov',
        roleId: 2,
    });
    console.log(createdUser);

    allUsers =await userService.getAllUsers();
    console.log(allUsers);

};
 
Promise.resolve(solveAll());