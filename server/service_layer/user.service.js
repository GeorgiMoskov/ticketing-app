const validator = require('validator');
const bcrypt = require('bcrypt');

const config = require('./../config');

const {
    userData,
    roleData,
} = require('./../data');

const userService = {};

userService.getAllUsers = async () => {
    const users = await userData.getAll();
    return users;
}

userService.getUserById = async (id) => {
    const user = await userData.getById();
    return user;
};

userService.getUserByEmail = async (email) => {
    const user = await userData.getByEmail();
    return user;
};

userService.createUser = async (userInpObj) => {

    const userObj = {
        email: userInpObj.email,
        password: (userInpObj.password +''),
        firstName: userInpObj.firstName,
        lastName: userInpObj.lastName,
        RoleId: userInpObj.roleId
    };

    console.log(userObj);

    if (!validator.isEmail(userObj.email)) {
        throw new Error('Email is not valid!');
    }

    if (validator.isEmpty(userObj.password)) {
        throw new Error('Password cant be empty');
    }

    if (validator.isEmpty(userObj.firstName) || !validator.isAlpha(userObj.firstName)) {
        throw new Error('First name is not valid !')
    }

    if (!validator.isNumeric(userObj.RoleId + '')) {
        throw new Error('Role ID must be Integer Number');
    }

    const userFound = await userData.getByEmail(userObj.email);
    if (userFound) {
        throw new Error('User with this E-mail Allready exists!');
    }

    const roleFound = await roleData.getById(userObj.RoleId);

    if (!roleFound) {
        throw new Error('Role with this ID doesnt exists');
    }

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(userObj.password, 10, function (err, hash) {
            if (err) {
                console.log(err);
                throw new Error('there were error while hashing password!');
                reject(err);
            };
            resolve(hash);
        });
    });

    userObj.password = hashedPassword;

    const createdUser = await userData.create(userObj);

    return createdUser;
}

module.exports = {
    userService,
}