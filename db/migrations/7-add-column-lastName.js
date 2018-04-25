'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "password" to table "Users"
 * addColumn "lastName" to table "Users"
 *
 **/

var info = {
    "revision": 7,
    "name": "add-column-lastName",
    "created": "2018-04-25T06:53:36.842Z",
    "comment": ""
};

var migrationCommands = [
    {
        fn: "addColumn",
        params: [
            "Users",
            "lastName",
            {
                "type": Sequelize.STRING,
                "allowNull": false
            }
        ]
    }
];

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
