const validator = require('validator');

const {
    ticketServices
} = require('./../service_layer/ticket.services');
const {
    userServices
} = require('./../service_layer/user.services')
const {
    teamServices,
} = require('./../service_layer/team.services');


const init = () => {

    const getAllTickets = () => {
        return async (req, res) => {
            if (!req.user.privileges.includes('canSeeAllTickets')) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }
            const allTickets = await ticketServices.getAllTickets();

            if (allTickets || allTickets.length === 0) {
                return res.send({
                    data: allTickets
                });
            }
        }
    };

    const getAllTicketsOfTeam = () => {
        return async (req, res) => {
            // is teamId valid 
            if (!validator.isInt(req.params.teamId)) {
                return res.send({
                    error: `You send invalid teamId ${req.params.teamId}`,
                });
            }
            const teamId = +req.params.teamId;
            const isSuchTeam = await teamServices.isSuchTeam(teamId);

            if (!isSuchTeam) {
                return res.send({
                    error: `You send invalid teamId ${teamId}`,
                });
            }

            const hasRights = req.user.privileges.includes('canSeeAllTicketsOfTheTeam');
            const isPartOfTeam = req.user.teams.includes(teamId);
            const isAdmin = req.user.role === 'Admin';
            const isTeamLeader = await teamServices.isTeamLeader(teamId, req.user.id);

            const hasPriviledge = hasRights && (isPartOfTeam || isAdmin || isTeamLeader);

            if (!hasPriviledge) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }
            const allTickets = await ticketServices.getAllTicketsOfTeam(teamId);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets of team ${teamId}`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    };

    const getAssignTo = () => {
        return async (req, res) => {
            const allTickets = await ticketServices.getAllTicketsAssignTo(req.user.id);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets assign to ${req.user.firstName} ${req.user.lastName}`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    };

    const getAssignToOfTeam = () => {
        return async (req, res) => {
            const userId = req.user.id;

            // is teamId valid 
            if (!validator.isInt(req.params.teamId)) {
                return res.send({
                    error: `You send invalid teamId ${req.params.teamId}`,
                });
            }
            const teamId = +req.params.teamId;
            const isSuchTeam = await teamServices.isSuchTeam(teamId);

            if (!isSuchTeam) {
                return res.send({
                    error: 'There is no such team',
                });
            }
            const allTickets = await ticketServices.getAllTicketsAssignToOfTeam(teamId, userId);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets assign to ${req.user.firstName} ${req.user.lastName}`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    }

    const getAssignToUser = () => {
        return async (req, res) => {
            // is userId valid 
            if (!validator.isInt(req.params.userId)) {
                return res.send({
                    error: `You send invalid userId ${req.params.userId}.`,
                });
            }
            const userId = +req.params.userId;

            const isSuchUser = await userServices.isSuchUser(userId);

            if (!isSuchUser) {
                return res.send({
                    error: `There is no user with id ${userId}.`,
                });
            }
            // TODO add check for permission 
            const allTickets = await ticketServices.getAllTicketsAssignTo(userId);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets assign to user with id ${userId}.`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    }

    const getAssignToUserOfTeam = () => {
        return async (req, res) => {
            // is userId valid 
            if (!validator.isInt(req.params.userId)) {
                return res.send({
                    error: `You send invalid userId ${req.params.userId}.`,
                });
            }
            const userId = +req.params.userId;

            const isSuchUser = await userServices.isSuchUser(userId);

            if (!isSuchUser) {
                return res.send({
                    error: `There is no user with id ${userId}.`,
                });
            }

            // is teamId valid 
            if (!validator.isInt(req.params.teamId)) {
                return res.send({
                    error: `You send invalid teamId ${req.params.teamId}`,
                });
            }
            const teamId = +req.params.teamId;
            const isSuchTeam = await teamServices.isSuchTeam(teamId);

            if (!isSuchTeam) {
                return res.send({
                    error: 'There is no such team',
                });
            }
            // TODO add check for permission 
            const allTickets = await ticketServices.getAllTicketsAssignToOfTeam(teamId, userId);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets assign to user with id ${userId} for team with id ${teamId}`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    }

    const getAllTicketsRequester = () => {
        return async (req, res) => {
            const allTickets = await ticketServices.getAllTicketsRequester(req.user.id);

            if (!allTickets || allTickets.length === 0) {
                return res.send({
                    error: `There is no tickets requested by ${req.user.firstName} ${req.user.lastName}`,
                });
            }
            return res.send({
                data: allTickets
            });
        }
    };

    const getTicketById = () => {
        return async (req, res) => {
            // is ticketId valid 
            if (!validator.isInt(req.params.ticketId)) {
                return res.send({
                    error: `You send invalid ticketId ${req.params.ticketId}`,
                });
            }
            const ticketId = +req.params.ticketId;
            const ticket = await ticketServices.getTicketById(ticketId);
            if (!ticket) {
                return res.send({
                    error: `You send invalid ticketId ${ticketId}`,
                });
            }

            const isRequester = ticket.requesterId === req.user.id;
            const isAssignToUser = ticket.assignToId === req.user.id;
            const isAdmin = req.user.role === 'Admin';

            let isPartOfTeam = false;
            let isTeamLeader = false;
            if (ticket.teamId) {
                isTeamLeader = await teamServices.isTeamLeader(ticket.teamId, req.user.id);
                isPartOfTeam = req.user.teams.includes(ticket.teamId);
            }

            const hasPriviledge = isPartOfTeam || isAdmin || isTeamLeader || isRequester || isAssignToUser;

            if (!hasPriviledge) {
                return res.send({
                    error: `You don't have permission to see that information`,
                });
            }

            return res.send({
                data: ticket
            });
        }
    }

    return {
        getAllTickets,
        getAllTicketsOfTeam,
        getAssignTo,
        getAssignToOfTeam,
        getAssignToUser,
        getAssignToUserOfTeam,
        getTicketById,
        getAllTicketsRequester
    }
};
module.exports = {
    init,
};