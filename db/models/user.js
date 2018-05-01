'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
        const {
            Role,
            Team,
        } = models;

        User.belongsTo(Role, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });

        User.belongsToMany(Team, {
            as: 'teams',
            through: 'users_in_teams',
            foreignKey: 'user_id',
            otherKey: 'team_id',
            onDelete: 'CASCADE',
        });
        Team.belongsToMany(User, {
            as: 'users_in_team',
            through: 'users_in_teams',
            foreignKey: 'team_id',
            otherKey: 'user_id',
            onDelete: 'CASCADE',
        });

    };
    return User;
};