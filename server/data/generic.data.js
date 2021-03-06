class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }

    createElement(obj) {
        // TODO add validation
        return this.Model.create(obj);
    }

    isExistInDb(id) {
        return this.Model.count({
                where: {
                    id: id
                }
            })
            .then(count => {
                if (count === 0) {
                    return false;
                }
                return true;
            });
    }

    getAllElements() {
        return this.Model.findAll({
            include: this.includes,
        });
    }

    getElementById(id) {
        return this.Model.findById(id, {
            include: this.includes,
        });
    }

    updateElement(obj, id) {
        return this.Model.update(obj, {
            where: {
                id: id,
            },
            returning: true,
            plain: true
        });
    }

    deleteElement(id) {
        return this.Model.destroy({
            where: {
                id: id,
            }
        })
    }
}

module.exports = Data;