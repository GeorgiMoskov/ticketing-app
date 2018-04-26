'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
        id: 1,
        firstName: 'admin',
        lastName: 'Moskov',
        password: '$2a$04$oXLcSAUBbfpzR59ApruM7.PkfH.yqp1Ih80NCXVYSSs.6UCsK.cNC', // 'test' is hashed with 4 salt rounds
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
        password: '$2a$04$S8Wnkzb8mW7w32oBEZZfueSYgfG10Q7hXfyQ7WKWxM5GDJyrbOy4e', // 'test' is hashed with 4 salt rounds
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