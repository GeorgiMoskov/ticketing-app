'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Importance', [{
        id: 1, 
        name: 'critical',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: 2, 
        name: 'Extremely important',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3, 
        name: 'Very Important',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4, 
        name: 'Important',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5, 
        name: 'Less Important',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6, 
        name: 'Unimportant',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Importance', null, {});

  }
};
