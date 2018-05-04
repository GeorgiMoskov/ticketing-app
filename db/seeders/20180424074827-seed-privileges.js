'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Privileges', [{
        id: 1,
        name: 'canSeeAllTickets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'canSeeAllTicketsOfTheTeam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'canSeeAllUsers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'canAccessAdminPanel',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Privileges', null, {});

  }
};