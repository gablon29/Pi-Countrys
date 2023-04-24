const { Activity } = require('../db');

const getAllActivity = async (req, res) => {
    try {
        const getAc = await Activity.findAll();
        return res.status(200).send(getAc);
    } catch (error) {
        return res.status(400).json({ error: error.message });
}
}

module.exports = {
    getAllActivity
}