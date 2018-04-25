const Data = require('./generic.data');

class UsersData extends Data {
    constructor(User, [Role]) {
        super(User, [Role]);
    }

    // can use different templates for different purposes 
    convertSequelizeObjToUserObj(userSequelize) {
        const user = {};
        user.id = userSequelize.id;
        user.email = userSequelize.email;
        user.firstName = userSequelize.firstName;
        user.lastName = userSequelize.lastName;
        user.role = userSequelize.Role.name;
        user.privileges = userSequelize.Role.Privileges.map((privilegeSequelize) => privilegeSequelize.name);
        user.imgUrl = userSequelize.imgUrl;
        user.description = userSequelize.description;
        return user;
    }

    async create(obj) {
        // obj contains properties of user that will be created
        const userSequelize = await this.createElement(obj);

        if (!userSequelize) {
            return null;
        }

        const user = await this.getById(userSequelize.id)
        return user;
    }

    async getAll() {
        const allUsersSequelize = await this.getAllElements();

        const allUsers = [];
        if (allUsersSequelize && allUsersSequelize.length > 0) {
            allUsersSequelize.forEach(user => {
                allUsers.push(this.convertSequelizeObjToUserObj(user));
            });
        }

        return allUsers;
    }

    async getByEmail(email) {
        const userSequelize = await this.Model.findOne({
            where: {
                email: email,
            },
            include: this.includes,
        });

        if (!userSequelize) {
            return null;
        }

        const user = this.convertSequelizeObjToUserObj(userSequelize);
        return user;
    }

    async getById(id) {
        const userSequelize = await this.getElementById(id);

        if (!userSequelize) {
            return null;
        }

        const user = this.convertSequelizeObjToUserObj(userSequelize);
        return user;
    }

    async update(obj, id) {
        // obj contains properties that we want to update of user with id
        const userSequelize = await this.updateElement(obj, id);

        if (!userSequelize) {
            return null;
        }

        const user = await this.getById(id)
        return user;
    }

    async delete(id) {

        await this.deleteElement(id);

        return null;
    }

}

module.exports = UsersData;