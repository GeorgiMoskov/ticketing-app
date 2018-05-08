const validator = require('validator');

const {
    statusServices
} = require('./../service_layer/status.services');


const init = () => {
    const getAllStatuses = () => {
        return async (req, res) => {

            const allStatuses = await statusServices.getAllStatuses();

            const resStatuses = [];

            allStatuses.map((el) => {
                resStatuses.push({
                    id: el.id,
                    name: el.name,
                });
            });

            return res.send({
                data: resStatuses,
            });
        }
    }

    return {
        getAllStatuses,
    }
}

module.exports = {
    init,
}