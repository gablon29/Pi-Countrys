const { Activity } = require("../db");

const postActByBody = (act) => {
    const newActivity =  Activity.create(act);
    return newActivity;
}

module.exports = {
    postActByBody
}