const {
    statusData,
} = require('./../data');

const statusServices = () => {

    const isSushStatus = async (statusId) => {

        return await statusData.isExistInDb(statusId); 
    }
}

module.exports = {
    statusServices,
}
