'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "phone" to table "Users"
 * addColumn "imgUrl" to table "Users"
 * addColumn "description" to table "Users"
 * addColumn "password" to table "Users"
 *
 **/

var info = {
    "revision": 6,
    "name": "change-User-Model",
    "created": "2018-04-24T22:04:57.685Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Users",
            "phone",
            {
                "type": Sequelize.STRING
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "imgUrl",
            {
                "type": Sequelize.STRING
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "description",
            {
                "type": Sequelize.STRING
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Users",
            "password",
            {
                "type": Sequelize.STRING
            }
        ]
    },
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
