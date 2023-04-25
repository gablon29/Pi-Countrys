const { Activity, Countries } = require('../db');

const getAllActivity = async (req, res) => {
    try {
        const getAc = await Activity.findAll({
            include: {
                model: Countries,
                attributes: ["ID","Nombre"],
                through: {
          attributes: [],
        },
            },
        });
        return res.status(200).send(getAc);
    } catch (error) {
        return res.status(400).json({ error: error.message });
}
}

module.exports = {
    getAllActivity
}