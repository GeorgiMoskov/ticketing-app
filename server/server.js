const express = require('express');
const config = require('./config');

const {
    userData
} = require('./data_layer/user.data');

const {
    roleData
} = require('./data_layer/role.data');

const {
    privilegeData
} = require('./data_layer/privilege.data');

const server = express();

require('./config/express').init(server);

server.get('/', (req, res) => res.send('Server is working'));

server.listen(config.port);


const solveAll = async () => {
    const createdPrivilege = await privilegeData.createPrivilege('privilegiq');

    const allPrivileges = await privilegeData.getAllPrivileges();

    const privilegeById = await privilegeData.getPrivilegeById(createdPrivilege.id);

    const createdRole = await roleData.createRole('role', [createdPrivilege.id]);

    const allRoles = await roleData.getAllRoles();
    
    const roleById = await roleData.getRoleById(createdRole.id);


    const createdUser = await userData.createUser('user', createdRole.id);

    const allUsers = await userData.getAllUsers();

    const userById = await userData.getUserById(createdUser.id);

};
 
Promise.resolve(solveAll());