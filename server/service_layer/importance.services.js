const {
    importanceData,
} = require('./../data');

const importanceServices = () => {

    const isSushImportance = async (importanceId) => {

        return await importanceData.isExistInDb(importanceId); 
    }
}

module.exports = {
    importanceServices,
}
