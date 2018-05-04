'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Teams', [
       {
          id: 1,
          name: 'General',
          description: 'Team contains all user in the system',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        id: 2,
        name: 'Glue',
        description: 'Team create front- and back-end of the Glue product',
        teamLeaderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'ProPackage',
        description: 'Team create front- and back-end of the ProPackage product',
        teamLeaderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'ToDo Project',
        description: 'Team create ToDO system',
        teamLeaderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Teams', null, {});

  }
};
