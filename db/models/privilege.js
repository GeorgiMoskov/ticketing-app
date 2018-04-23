'use strict';
module.exports = (sequelize, DataTypes) => {
    var Privilege = sequelize.define('Privilege', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
    }, {
        paranoid: true
    });

    Privilege.associate = function (models) {
        // associations can be defined here
    };
    return Privilege;
};