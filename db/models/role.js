'use strict';
module.exports = (sequelize, DataTypes) => {
    var Role = sequelize.define('Role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }, {
        paranoid: true,
    });

    Role.associate = function (models) {
        // associations can be defined here
        const { Privilege } = models;

        Role.belongsToMany(Privilege, {
            through: 'role_privilege',
            foreignKey: 'role_id',
            onDelete: 'CASCADE',
        });

        Privilege.belongsToMany(Role, {
            through: 'role_privilege',
            foreignKey: 'privilege_id',
        })
        
    };
    return Role;
};