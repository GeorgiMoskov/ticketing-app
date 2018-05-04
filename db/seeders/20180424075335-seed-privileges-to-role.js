'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('role_privilege', [{
        role_id: '1',
        privilege_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '1',
        privilege_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '1',
        privilege_id: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '1',
        privilege_id: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '1',
        privilege_id: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '2',
        privilege_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '2',
        privilege_id: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '3',
        privilege_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: '3',
        privilege_id: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('role_privilege', null, {});
  }
};
