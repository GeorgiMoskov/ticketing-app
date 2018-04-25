'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Privileges', [{
        id: 1,
        name: 'canSeeAllTeams', // In seaction "teams" will see all existing teams
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'canSeeTeamsHeIsIn', // In section "teams" will see all existing teams he is part of
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'canSeeAllTeamsInfo', // will be able to view everything in all teams
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'canSeeTeamsHeIsInInfo', // will be able to view everything in teams he is part of
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'canSeeAllUsers', // wii be able to see all users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'canCreateUser',  // will be able to create new users
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Privileges', null, {});

  }
};