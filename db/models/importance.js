'use strict';
module.exports = (sequelize, DataTypes) => {
    var Importance = sequelize.define('Importance', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        paranoid: true
    });

    Importance.associate = function (models) {
        // associations can be defined here
      };
  
      return Importance;
};
