const {
    userData,
    roleData,
    ticketData,
    privilegeData,
    teamData,
} = require('./data');

const {
    ticketServices,
} = require('./service_layer/ticket.services');

// const ticketController =  require('./controllers/ticket.controller');

// const { userServices } = require('./service_layer/user.services');

const {teamServices }= require('./service_layer/team.services')
// const bcrypt = require('bcrypt');

// const config = require('./config');

const run = async () => {

const isTeamLeader = await teamServices.isTeamLeader(2, 4); //exist 

const isSuchTeam = await teamServices.isSuchTeam(5); //dont exist 

console.log(isTeamLeader);
console.log(isSuchTeam);
    // const controller = ticketController.init();

    // const tickets = await controller.getAllTickets();
    // console.log(tickets);
    // UsersData
    // const user = await UsersData.getAll();
    //  const user = await UsersData.getByEmail('pesho@abv.bg');
 //     const user = await userData.getById(2);
    // const user = await UsersData.create({ // uniquness of the email prevent adding again deleted user - in this case => nee update 
    //     firstName: 'Tosho',
    //     email: 'tosho1@abv.bg',
    //     RoleId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // });
    // const users = await UsersData.getAll();
    //  console.log(user);
    //    const user = await UsersData.delete(15);
 //        console.log(user);

    // const role = await RolesData.create({
    //     name: 'new role'
    // }, [2, 3]);
    // const role = await RolesData.updateRolePrivileges(4, [3, 2, 4]);

    // const role = await RolesData.delete(5);

    // const ticket = await ticketService.getAllTicketsOfTeam(2);
    // // const targetDate = new Date();
    // //     targetDate.setDate(targetDate.getDate() + 10);
    // // const ticket = await TicketsData.create({
    // //     description: 'To do login form',
    // //     deadLine: targetDate,
    // //     requesterId: 1,
    // //     assignToId: 3,
    // //     escalationContactId: 4,
    // //     teamId: 
    // // })
   // console.log(ticket);

    //team
    //    const team = await teamData.create({
    //        name: 'ToDosss',
    //        description: 'Team create ToDO system',
    //        teamLeaderId: 12,
    //    });
    // const team = await teamData.update({

    //     teamLeaderId: null,
    // }, );
    // const team = await teamData.update({
    //     name: 'ToDo Project', 
    // }, 10);
    //const team = await teamData.delete();

    // const team = await teamData.getById(1);
    // console.log(team);

    // console.log(role);
    // {
    // "email": "admin@gmail.com",
    // "password": "test",
    // }

//    const user = {
//     email: 'admin@gmail.com',
//     password: 'test',
//     firstName: 'Admina',
//     lastName: 'Tttttt',
//     roleName: 'Admin',
//    };

//   const userCreated = await userServices.createUser(user);


//    console.log(userCreated);

};

run();