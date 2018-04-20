'use strict';
module.exports = (sequelize, DataTypes) => {
    var Person = sequelize.define('Person', {
        name: DataTypes.STRING
    }, {});

    Person.associate = function (models) {
        // associations can be defined here
    };
    return Person;
};