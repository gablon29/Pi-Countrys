const { Op } = require("sequelize");
const { Activity } = require("../db");

const getActById = async (req, res) => {
    try {
        const { id } = req.params;
        const myAct = await Activity.findAll({
            where: {
                ID:  `${id}`
                
            }
        })
        res.status(200).json(myAct);
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
}

module.exports = {
    getActById
}