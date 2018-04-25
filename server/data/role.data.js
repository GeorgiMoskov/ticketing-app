const Data = require('./generic.data');

class RolesData extends Data {
    constructor(Role, [Privileges]) {
        super(Role, [Privileges]);
    }

    convertRoleSequelizeObjToRoleObj(roleSequelize) {
        const role = {
            id: roleSequelize.id,
            name: roleSequelize.name,
            privileges: roleSequelize.Privileges.map((privilegeSequelize) => privilegeSequelize.name)
        };

        return role;
    }

    async create(obj) {
        // create without privileges... may be shood create a Model
        const roleSequelize = await this.createElement(obj);

        if (!roleSequelize) {
            return null;
        }

        const role = await this.getById(roleSequelize.id)
        return role;
    }

    async getAll() {
        const allRolesSequelize = await this.getAllElements();

        const allRoles = [];
        if (allRolesSequelize && allRolesSequelize.length > 0) {
            allRolesSequelize.forEach(role => {
                allRoles.push(this.convertRoleSequelizeObjToRoleObj(role));
            });
        }

        return allRoles;
    }

    async getById(id) {
        const roleSequelize = await this.getElementById(id);

        if (!roleSequelize) {
            return null;
        }

        const role = this.convertRoleSequelizeObjToRoleObj(roleSequelize);
        return role;
    }

    async update(obj, id) {
        const roleSequelize = await this.updateElement(obj, id);

        if (!roleSequelize) {
            return null;
        }

        const role = await this.getById(id)
        return role;
    }

    // async updatePrivilegeByRole(privilegeId, roleId) {
    // TODO should chek if pair privilegeId-roleId exists update or create it... 
    //  
    // }

    async delete(id) {

        await this.deleteElement(id);

        return null;
    }

}

module.exports = RolesData;