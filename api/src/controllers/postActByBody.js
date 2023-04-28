const { Activity } = require("../db");

const postActByBody = async (act) => {
    try {
        const newActivity = await Activity.create(act);
        return newActivity;
    } catch (error){
        return {
            error: error.message
        }
    }
}

module.exports = {
    postActByBody
}