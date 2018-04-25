const {
    User,
    Role,
    Privilege
} = require('../../db/models');

const genericIncludeForUsers = [{
        model: Role,
        include: [Privilege],
    }];

const genericUserSequelizeObjToUserObj = (userSequelize) => {
    const user = {};
    user.id = userSequelize.id;
    user.password = userSequelize.password;
    user.email = userSequelize.email;
    user.firstName = userSequelize.firstName;
    user.role = userSequelize.Role.name;
    user.privileges = userSequelize.Role.Privileges.map((privilegeSequelize) => privilegeSequelize.name);

    return user;
};
const userData = {};

userData.createUser = async (UserInpObj) => {
    const user = {
        email: UserInpObj.email,
        password: UserInpObj.password,
        firstName: UserInpObj.firstName,
        RoleId: UserInpObj.roleId
    };

    //  returned userSequelize obj doesnt have includes
    const userSequelize = await User.create(user);
    const createdUser = await userData.getUserById(userSequelize.id);
    return createdUser;
};

userData.getAllUsers = async () => {
    const allUsersSequelize = await User.findAll({
        include: genericIncludeForUsers,
    });

    if(!allUsersSequelize || allUsersSequelize.length === 0){
        return [];
    };

    const allUsers = allUsersSequelize.map(genericUserSequelizeObjToUserObj);

    return allUsers;
};

userData.getUserById = async (id) => {

    const userSequelize = await User.findById(id, {
        include: genericIncludeForUsers,
    });

    if(!userSequelize) {
        return null;
    }

    const user = genericUserSequelizeObjToUserObj(userSequelize);

    return user;
};

userData.getUserByEmail = async (email) => {

    const userSequelize = await User.findOne({
        where: {email: email},
        include: genericIncludeForUsers,
    });

    if(!userSequelize) {
        return null;
    }

    const user = genericUserSequelizeObjToUserObj(userSequelize);

    return user;
};

module.exports = {
    userData
};