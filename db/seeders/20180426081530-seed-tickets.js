'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tickets', [{
        id: 1,
        description: 'Feature 1.1.',
        deadLine: new Date(),
        requesterId: 3, 
        assignToId: 2,
        escalationContactId: 3,
        statusId: 1, 
        importanceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'Feature 2.1.',
        deadLine: new Date(),
        requesterId: 4, 
        assignToId: 3,
        escalationContactId: 4,
        teamId: 1,
        statusId: 1, 
        importanceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'Feature 1.2.',
        deadLine: new Date(),
        requesterId: 5, 
        assignToId: 2,
        escalationContactId: 5,
        teamId: 2,
        statusId: 3,
        importanceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        description: 'Feature 1.3.',
        deadLine: new Date(),
        requesterId: 5, 
        assignToId: 3,
        escalationContactId: 5,
        statusId: 2, 
        importanceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tickets', null, {});
  }
};
