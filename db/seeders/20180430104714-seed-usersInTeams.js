'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users_in_teams', [{
        user_id: 2,
        team_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        team_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        team_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        team_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        team_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        team_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users_in_teams', null, {});
  }
};
