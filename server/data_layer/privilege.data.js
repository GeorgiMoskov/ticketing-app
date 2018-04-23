const {
    Privilege
} = require('../../db/models');

const genericPrivilegeSequelizeObjToPrivilegeObj = (privilegeSequelize) => {
    const privilege = {
        id: privilegeSequelize.id,
        name: privilegeSequelize.name,
    };

    return privilege;
}

const privilegeData = {};

privilegeData.createPrivilege = async (name) => {
    const privilege = {
        name: name
    };

    //privilegeSequelize doesnt have inlcudes
    const privilegeSequelize = await Privilege.create(privilege);

    const cretedPrivilege = genericPrivilegeSequelizeObjToPrivilegeObj(privilegeSequelize);

    return cretedPrivilege;
};

privilegeData.getAllPrivileges = async () => {
    const allPrivilegesSequelize = await Privilege.findAll();

    if(!allPrivilegesSequelize || allPrivilegesSequelize.length === 0){
        return [];
    };

    const allPrivileges = allPrivilegesSequelize.map(genericPrivilegeSequelizeObjToPrivilegeObj);

    return allPrivileges;
};



privilegeData.getPrivilegeById = async (id) => {
    const privilegeSequelize = await Privilege.findById(id);

    if(!privilegeSequelize) {
        return null;
    }

    const privilege = genericPrivilegeSequelizeObjToPrivilegeObj(privilegeSequelize);

    return privilege;
};

module.exports = {
    privilegeData
};