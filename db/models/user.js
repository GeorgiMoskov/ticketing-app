'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
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