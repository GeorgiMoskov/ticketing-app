const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

const { userServices } = require('./../service_layer/user.services');
const { roleServices } = require('./../service_layer/role.services');

const config = require('./../config');

const init = () => {

    const login = () => {
        return async (req, res) => {

            console.log(req.body);
            
            if (!req.body.email || !validator.isEmail(req.body.email + '')) {
                return res.send({
                    error: 'Email is not valid!',
                });
            }

            if (!req.body.password || validator.isEmpty(req.body.password + '')) {
                return res.send({
                    error: 'Password cant be empty!',
                });
            }

            const userFound = await userServices.getUserByEmail(req.body.email);

            if (!userFound) {
                return res.send({
                    error: 'Wrong email or password!',
                });
            }

            const isPasswordCoincides = await bcrypt.compare(req.body.password, userFound.password);
            if (!isPasswordCoincides) {
                return res.send({
                    error: 'Wrong email or password! KOr',
                });
            }

            const tokenExpirce = moment(new Date()).add(config.JWT_EXPIRE_TIME, 'seconds').unix();

            const payload = {
                sub: userFound.id,
                email: userFound.email,
                exp: tokenExpirce,
            };

            const token = jwt.encode(payload, config.JWT_SECRET);

            return res.send({
                token: token,
            });
        }
    }

    const register = () => {
        return async (req, res) => {
            const canCreateUser = req.user.privileges.find((privilege) => privilege === 'canCreateUser');

            if (!canCreateUser) {
                return res.send('you CAN NOT register other users!');
            }

            const userWillBeCreated = {
                email: req.body.userToCreate.email,
                password: (req.body.userToCreate.password),
                firstName: req.body.userToCreate.firstName,
                lastName: req.body.userToCreate.lastName,
                roleName: req.body.userToCreate.roleName
            }

            try {
                const userCreated = await userServices.createUser(userWillBeCreated);
                res.status(200).send({
                    user: userCreated,
                })
            } catch (er) {
                console.log(er);
                res.status(401).send({
                    error: er,
                })
            }
        }
    }

    return {
        login,
        register
    }
}

module.exports = {
    init,
}