const {
    Role,
    Privilege
} = require('../../db/models');

const genericIncludeForRole = [{
    model: Privilege,
}];

const genericRoleSequelizeObjToRoleObj = (roleSequelize) => {
    const role = {
        id: roleSequelize.id,
        name: roleSequelize.name,
        privileges: roleSequelize.Privileges.map((privilegeSequelize) => privilegeSequelize.name)
    };

    return role;
}

const roleData = {};

roleData.createRole = async (name, privilegesIds) => {
    const role = {
        name: name
    };

    // returned roleSequelize doesnt have includes
    const roleSequelize = await Role.create(role);
    await roleSequelize.setPrivileges(privilegesIds);

    const cretedRole = await roleData.getRoleById(roleSequelize.id);
    
    return cretedRole;

};

roleData.getAllRoles = async () => {
    const allRolesSequelize = await Role.findAll({
        include: genericIncludeForRole
    });

    if(!allRolesSequelize || allRolesSequelize.length === 0){
        return [];
    };

    const allRoles = allRolesSequelize.map(genericRoleSequelizeObjToRoleObj);

    return allRoles;
};



roleData.getRoleById = async (id) => {
    const roleSequelize = await Role.findById(id, {
        include: genericIncludeForRole
    });

    if(!roleSequelize) {
        return null;
    }

    const role = genericRoleSequelizeObjToRoleObj(roleSequelize);

    return role;
};

module.exports = {
    roleData
};


roleData.getRoleByName = async (name) => {
    const roleSequelize = await Role.findById(id, {
        include: genericIncludeForRole
    });

    if(!roleSequelize) {
        return null;
    }

    const role = genericRoleSequelizeObjToRoleObj(roleSequelize);

    return role;
};

module.exports = {
    roleData
};