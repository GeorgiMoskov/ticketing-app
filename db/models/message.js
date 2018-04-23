'use strict';
module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    }, {
        paranoid: true
    });

    Message.associate = function (models) {
        // associations can be defined here
        const {
            User,
        } = models;

        Message.belongsTo(User, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

    };
    return Message;
};