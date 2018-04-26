const {
    User,
    Role,
    Privilege,
    Ticket,
    Status,
    Importance,
    Team
} = require('../../db/models');

// TODO Optional - move all extended classes and functionality in base searvice layer 
const Data = require('./generic.data');
const UsersData = require('./user.data');
const RolesData = require('./role.data');
const TicketsData = require('./ticket.data');
const TeamsData = require('./team.data');

module.exports = {
    user: new UsersData(User, [{
        model: Role,
        include: [Privilege]
    }]),
    role: new RolesData(Role, [Privilege]),
    privilege: new Data(Privilege),
    ticket: new TicketsData(Ticket, [{
            model: User,
            as: 'requester'
        },
        {
            model: User,
            as: 'assignTo'
        },
        {
            model: User,
            as: 'escalationContact'
        },
        {
            model: Team,
            as: 'team',
            include: [{
                model: User,
                as: 'teamLeader'
            }],
        },
        {
            model: Status,
            as: 'status',
        }, {
            model: Importance,
            as: 'importance',
        }
    ]),
    team: new TeamsData(Team, [{
        model: User,
        as: 'teamLeader'
    }]),

};