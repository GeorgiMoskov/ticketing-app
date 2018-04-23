'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ticket = sequelize.define('Ticket', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deadLine: {
            type: DataTypes.DATE,
            allowNull: false
        },

    }, {
        paranoid: true
    });

    Ticket.associate = function (models) {
        // associations can be defined here
        const {
            User,
            Team,
            Status,
            Importance
        } = models;

        Ticket.belongsTo(User, {
            as: 'requester',
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Ticket.belongsTo(User, {
            as: 'assignTo',
            foreignKey: {
                allowNull: true,
            },
            onDelete: 'CASCADE',
        });


        Ticket.belongsTo(User, {
            as: 'escalationContact',
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Ticket.belongsTo(Team, {
            as: 'team',
            foreignKey: {
                allowNull: true,
            },
            onDelete: 'CASCADE',
        });

        Ticket.belongsTo(Status, {
            as: 'status',
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        Ticket.belongsTo(Importance, {
            as: 'importance',
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

    };
    return Ticket;
};