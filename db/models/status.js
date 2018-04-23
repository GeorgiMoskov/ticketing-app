'use strict';
module.exports = (sequelize, DataTypes) => {
    var Status = sequelize.define('Status', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        paranoid: true
    });

    Status.associate = function (models) {
        // associations can be defined here
      };
  
      return Status;
};