const { Op } = require("sequelize");
const { Countries, Activity } = require("../db");

const getCountryByName = async (req, res) => {
    try {
        const { name } = req.query;
        const myCountry = await Countries.findAll({
            where: {
                Nombre: {
                    [Op.iLike]: `%${name}%`
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

        myCountry.length ? res.status(200).json(myCountry) :
            res.status(404).send({ message: "Country not exist yet" });
    } catch (error) {
        res.status(200).json({ error: error.message })
    }
}

module.exports = {
    getCountryByName
}
