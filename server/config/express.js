const express = require('express');
const bodyParser = require('body-parser');

const init = (server) => {
    server.use(bodyParser.urlencoded({
        extended: true,
    }));

    server.use(bodyParser.json());
};

module.exports = {
    init,
}