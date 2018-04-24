'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
        id: 1,
        firstName: 'Pesho',
        RoleId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'pesho@abv.bg',
      },
      {
        id: 2,
        firstName: 'Tosho',
        RoleId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'tosho@abv.bg',
      },
      {
        id: 3,
        firstName: 'Stanka',
        RoleId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'stanka@abv.bg',
      },
      {
        id: 4,
        firstName: 'Stamat',
        RoleId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'stamat@abv.bg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};