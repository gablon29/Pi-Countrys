const { Op } = require("sequelize");
const { Countries, Activity  } = require("../db");

const getCountryById = async (req, res) => {
    try{
        const { id } = req.params;
        const myCountryId = await Countries.findAll({
            where: {
                ID: {
                    [Op.iLike] : `%${id}%`
                }
            },
            include: {
                model: Activity,
                attributes: ["Nombre"],
                through: {
                  attributes: [],
                },
              },
        })
        myCountryId.length ? res.status(200).json(myCountryId) :
        res.status(404).send({ message: 'Country not found' });
    } 
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getCountryById
}