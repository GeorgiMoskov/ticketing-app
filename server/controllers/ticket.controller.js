const {
    ticketServices
} = require('./../service_layer/ticket.services');
const {
    userServices
} = require('./../service_layer/user.services')


const init = () => {

    const getAllTickets = () => {
        return async (req, res) => {
            if (!req.user.privileges.includes('canSeeAllTickets')) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }
            const allTickets = await ticketServices.getAllTickets();

            if (allTickets) {
                return res.send(allTickets);
            }
        }
    };

    const getAllTicketsOfTeam = () => {
        return async (req, res) => {
            // not wotking 
            const isPartOfTeam = req.user.teams.includes(+req.teamId);
            if (!req.user.privileges.includes('canSeeAllTicketsOfTheTeam') || !isPartOfTeam) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }
            const allTickets = await ticketServices.getAllTicketsOfTeam(req.teamId);

            if (allTickets) {
                return res.send(allTickets);
            }
        }
    };

    const getAllTicketsOfUser = () => {
        return async (req, res) => {

        }
    };

    return {
        getAllTickets,
        getAllTicketsOfTeam,
    }
};
module.exports = {
    init,
};