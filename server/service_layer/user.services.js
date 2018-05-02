const validator = require('validator');
const bcrypt = require('bcrypt');

const config = require('./../config');

const {
    userData,
} = require('./../data');

const {roleServices} = require('./role.services');

const userServices = {};

userServices.getAllUsers = async () => {
    const users = await userData.getAll();
    if(!users) {
        return null;
    }
    return users;
}

userServices.getUserById = async (id) => {
    const user = await userData.getById(id);
    if(!user) {
        return null;
    }
    return user;
};

userServices.getUserByEmail = async (email) => {
    const user = await userData.getByEmail(email);
    if(!user) {
        return null;
    }
    return user;
};

userServices.createUser = async (userInpObj) => {
    
    //make sure all properties are string so validator could test , if tey are not strings it will crash
    const userObj = {
        email: userInpObj.email + '',
        password: (userInpObj.password +''),
        firstName: userInpObj.firstName + '',
        lastName: userInpObj.lastName + '',
        RoleId: null, // in validations will use userInpObj.roleName and latter will set RoleId
    };
    userInpObj.roleName += '';


    if (!userObj.email || !validator.isEmail(userObj.email)) {
        throw 'Email is not valid!';
    }

    if (!userObj.password ||  validator.isEmpty(userObj.password)) {
        throw 'Password cant be empty';
    }

    if (!userObj.firstName || validator.isEmpty(userObj.firstName) || !validator.isAlpha(userObj.firstName)) {
        throw 'First name is not valid !';
    }

    if (!userInpObj.roleName || validator.isEmpty(userInpObj.roleName)) {
        throw 'Role Cant be empty! ';
    }

    const userFound = await userData.getByEmail(userObj.email);
    if (userFound) {
        throw 'User with this E-mail Allready exists!';
    }
    let roleFound = undefined;
    try {
    roleFound = await roleServices.getRoleByName(userInpObj.roleName);
    } catch(er){
        throw er;
    }

    if (!roleFound) {
        throw 'Role with this name doesnt exists';
    }

    userObj.RoleId = roleFound.id;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(userObj.password, config.BCRYPT_SALT_ROUNDS, function (err, hash) {
            if (err) {
                console.log(err);
                throw 'there were error while hashing password!';
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
    userServices,
}