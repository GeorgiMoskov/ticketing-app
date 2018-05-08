const {
    importanceData,
} = require('./../data');

const importanceServices = {};

importanceServices.isSushImportance = async (importanceId) => {

    return await importanceData.isExistInDb(importanceId);
}

importanceServices.getAllImportances = async () => {
    const importances = await importanceData.getAllElements();

    if (!importances) {
        return null;
    }

    return importances;
}

module.exports = {
    importanceServices,
}