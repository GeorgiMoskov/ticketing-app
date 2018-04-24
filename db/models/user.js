'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        paranoid: true
    });

    User.associate = function (models) {
        // associations can be defined here
        const { Role } = models;

        User.belongsTo(Role, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        })

    };
    return User;
};