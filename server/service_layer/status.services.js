const {
    statusData,
} = require('./../data');

const statusServices = {};

statusServices.isSushStatus = async (statusId) => {

    return await statusData.isExistInDb(statusId);
}

statusServices.getAllStatuses = async () => {
        const statuses = await statusData.getAllElements();

        if (!statuses) {
            return null;
        }

        return statuses;
    }

module.exports = {
    statusServices,
}