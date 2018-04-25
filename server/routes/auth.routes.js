const express = require('express');
const  router = express.Router();

const init = () => {
    const controller = authController.init();

    router.post('/api/register', controller.register());

    router.post('/api/login', controller.login());

    return router;
}

module.exports = {
    init
};