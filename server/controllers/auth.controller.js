const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

const { userService } = require('./../service_layer/user.service');
const config = require('./../config');

const init = () => {

    const login = () => {
        return async (req, res) => {
            console.log('loginnnn!');

            if (!validator.isEmail(req.body.email)) {
                return res.send({
                    error: 'Email is not valid!',
                });
            }

            if (validator.isEmpty(req.body.password)) {
                return res.send({
                    error: 'Password cant be empty!',
                });
            }

            const userFound = await userService.getUserByEmail(req.body.email);
            console.log(userFound);
            if (!userFound) {
                return res.send({
                    error: 'Wrong email or password!',
                });
            }

            const isPasswordCoincides = await bcrypt.compare(req.body.password, userFound.password);
            if(!isPasswordCoincides) {
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
            const canCreateUser = req.user.privileges.find( (privilege) => privilege == 'canCreateUser' );
            
            if(!canCreateUser){
                return res.send('you CAN NOT register other users!');
            }

            return res.send('you CAN register other users!');

            // try {
            //     userService.createUser(req.body.email, req.body.password, req.body.name, req.body.roleId);
            // } catch (er) {
            //     console.log(er);
            //     res.status(401).send({
            //         error: er,
            //     });
            // }

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