'use strict';
module.exports = (sequelize, DataTypes) => {
    var Log = sequelize.define('Log', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {});

    Log.associate = function (models) {
        // associations can be defined here
        const {
            User,
        } = models;

        Log.belongsTo(User, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

    };
    return Log;
};