const express = require('express');
const config = require('./config');


const server = express();

require('./config/express').init(server);

server.get('/', (req, res) => res.send('Server is working'));

server.listen(config.port);

let createPrivileges = async (privilegesArr) => {

    const privilegesPromiseArr = [];

    privilegesArr.forEach(privilege => {
        const privilegeObj = {
            name: privilege.name,
        };

        const createdPrivilegePromise = Privilege.findCreateFind({
            where: privilegeObj,
            defaults: privilegeObj,
        });

        privilegesPromiseArr.push(createdPrivilegePromise);
    });

    return Promise.all(privilegesPromiseArr);


};
const solveAll = async () => {
    const {
        User,
        Role,
        Privilege,
    } = require('../db/models');
    
    const privilegeObj1 = {
        name: 'priv111',
    };
    
    const privilegeObj2 = {
        name: 'priv222',
    };
    
    const privilegeObj3 = {
        name: 'priv333',
    };
    
    let privilege1 = await Privilege.findCreateFind({
        where: privilegeObj1,
        defaults: privilegeObj1,
    });
    
    let privilege2 = await Privilege.findCreateFind({
        where: privilegeObj2,
        defaults: privilegeObj2,
    });
    
    let privilege3 = await Privilege.findCreateFind({
        where: privilegeObj3,
        defaults: privilegeObj3,
    });
    
    
    const roleObj1 = {
        name: 'Role111',
    };
    const roleObj2 = {
        name: 'Role222',
    };
    
    let role1 = await Role.findCreateFind({
        where: roleObj1,
        defaults: roleObj1,
    });
    
    let role2 = await Role.findCreateFind({
        where: roleObj2,
        defaults: roleObj2,
    });
    
    role1 = role1[0];
    role2 = role2[0];

    privilege1 = privilege1[0];
    privilege2 = privilege2[0];
    privilege3 = privilege3[0];

    await role1.setPrivileges([privilege1,privilege2]);
    await role2.setPrivileges([privilege2, privilege3]);

    let userObj1 = {
        firstName: 'Gosho',
    };
    let userObj2 = {
        firstName: 'Pesho',
    };

    let user1 = await User.findCreateFind({
        where: {
            firstName: userObj1.firstName,
            RoleId: role1.id,
        },
        defaults: {
            firstName: userObj1.firstName,
            RoleId: role1.id,
        },
    });

    let user2 = await User.findCreateFind({
        where: {
            firstName: userObj2.firstName,
            RoleId: role2.id,
        },
        defaults: {
            firstName: userObj2.firstName,
            RoleId: role2.id,
        },
    });

    user1 = user1[0];
    user2 = user2[0];

    await user1.setRole(role1);
    await user2.setRole(role2);

    user1 = await User.findOne({
        where:{
            firstName: userObj1.firstName,
        },
        include: [Role],
    });

    user2 = await User.findOne({
        where:{
            firstName: userObj1.firstName,
        },
        include: [{
            model: Role,
            include: [Privilege],
        }],
    });
    

    return [user1, user2];
}




Promise.resolve(solveAll()).then((arrOfUsers) => {
    arrOfUsers.forEach(user => {
        console.log(user.firstName);
        console.log(user.Role.name);
        console.log(user.Role.Privileges);
    });
});