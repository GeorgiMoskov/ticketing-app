const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const userService = require('./../service_layer/user.service');

const config = require('./index');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
};

console.log(config);

const init = function () {
    // checks expiration date of the token, and if it's not expired it will execute the callback
    return new JwtStrategy(options, async function (jwt_payload, done) {
        //jwt_payload is decoded token

        let userFound = await userService.getUserById(jwt_payload.sub);

        if (!userFound) {
            return done('Access denied', false);
        }

        //this userObject will be attached to the req (req.user) on every route where passport uses this strategy.
        const userDataOnEveryReq = {
            id: userFound.id,
            email: userFound.email,
            role: userFound.role,
            privileges: userFound.privileges
        }

        return done(null, userDataOnEveryReq);
    });
};

module.exports = {
    init,
}