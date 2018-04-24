'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "email" to table "Users"
 *
 **/

var info = {
    "revision": 5,
    "name": "add-email",
    "created": "2018-04-24T09:26:10.633Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Users",
        "email",
        {
            "type": Sequelize.STRING,
            "allowNull": false,
            "unique": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
