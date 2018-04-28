const {
    ticketServices
} = require('./../service_layer/ticket.services');


const init = () => {

    const getAllTickets = () => {
        return async (req, res) => {
            if(!req.user) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }
            const allTickets = await ticketServices.getAllTickets();

            if(allTickets){
            return res.send(allTickets);}
        }
    };

    const getAllTicketsOfTeam = (id) => {
        return async (req, res) => {

        }
    };

    const getAllTicketsOfUser = () => {
        return async (req, res) => {

        }
    };

    return {
        getAllTickets,

    }
};
module.exports = {
    init,
};