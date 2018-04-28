'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'admin',
      lastName: 'Moskov',
      email: 'admin@abv.bg',
      password: '$2a$04$oXLcSAUBbfpzR59ApruM7.PkfH.yqp1Ih80NCXVYSSs.6UCsK.cNC', // 'test' is hashed with 4 salt rounds
      RoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Tosho',
        lastName: 'Tonchev',
        password: '$2a$04$S8Wnkzb8mW7w32oBEZZfueSYgfG10Q7hXfyQ7WKWxM5GDJyrbOy4e', // 'test' is hashed with 4 salt rounds
        RoleId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'tosho@abv.bg',
      },
      {
        id: 3,
        firstName: 'Stanka',
        lastName: 'Ssssssss',
        RoleId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'stanka@abv.bg',
        password: '1234567',
      },
      {
        id: 4,
        firstName: 'Stamat',
        lastName: 'Ssssssss',
        RoleId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: 'stamat@abv.bg',
        password: '1234567',
      },
      {
      id: 5,
      firstName: 'Ivan',
      lastName: 'Tttttttt',
      RoleId: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      email: 'sivan@abv.bg',
      password: '1234567',
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};