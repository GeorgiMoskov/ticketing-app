'use strict';
module.exports = (sequelize, DataTypes) => {
    var Team = sequelize.define('Team', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
    }, {
        paranoid: true
    });

    Team.associate = function (models) {
        // associations can be defined here
        const { User } = models;

        Team.belongsTo(User, {
            as: 'teamLeader',
            foreignKey: {
                allowNull: true,
            },
            onDelete: 'CASCADE',
        });

    };
    return Team;
};