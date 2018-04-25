'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
        id: 1,
        firstName: 'admin',
        lastName: 'Moskov',
        password: 'test',
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'admin@abv.bg',
      },
      {
        id: 2,
        firstName: 'Tosho',
        lastName: 'Tonchev',
        password: 'test',
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'tosho@abv.bg',
      },
      {
        id: 3,
        firstName: 'Stanka',
        lastName: 'Stankova',
        password: 'test',
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'stanka@abv.bg',
      },
      {
        id: 4,
        firstName: 'Stamat',
        lastName: 'Stamatov',
        password: 'test',
        RoleId: 3,
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