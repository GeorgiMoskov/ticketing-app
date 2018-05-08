const validator = require('validator');

const {
    importanceServices
} = require('./../service_layer/importance.services');


const init = () => {
    const getAllImportances = () => {
        return async (req, res) => {

            const allImportances = await importanceServices.getAllImportances();
            
            const resImportances = [];

            allImportances.map((el) => {
                resImportances.push({
                    id: el.id,
                    name: el.name,
                });
            });

            return res.send({
                data: resImportances,
            });
        };
    }

    return {
        getAllImportances,
    };
}

module.exports = {
    init,
}