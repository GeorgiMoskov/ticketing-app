const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const moment = require('moment');

const userService = require('./../service_layer/user.service');
const config = require('./../config');

const init = () => {

    const register = () => {
        return async (req, res) => {
            console.log('registeeerrr');
            try {
                userService.createUser(req.body.email, req.body.password, req.body.name, req.body.roleId);
            } catch (er) {
                console.log(er);
                res.status(401).send({
                    error: er,
                });
            }

        }
    }

    const login = () => {
        return async (req, res) => {
            console.log('loginnnn!');

            const foundUser = userService.getUserByEmail(req.body.email);
        }
    }



}