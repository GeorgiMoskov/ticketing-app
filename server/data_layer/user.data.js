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
    user.firstName = userSequelize.firstName;
    user.role = userSequelize.Role.name;
    user.privleges = userSequelize.Role.Privileges.map((privilegeSequelize) => privilegeSequelize.name);

    return user;
};

const userData = {};

userData.createUser = async (firstName, roleId) => {
    const user = {
        firstName: firstName,
        RoleId: roleId
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

module.exports = {
    userData
};