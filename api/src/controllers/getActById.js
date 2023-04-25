const { Op } = require("sequelize");
const { Activity } = require("../db");

const getActById = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name)
        const myAct = await Activity.findAll({
            where: {
                Nombre:  `${name}`
                
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