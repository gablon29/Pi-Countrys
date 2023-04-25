const { Countries, Activity } = require("../db");

const getDataCountry = (count) => {
    const countryDB = Countries.create(count)
    return countryDB;
}

const getDBCountrys = async (req, res) => {
    try {
        const countrys = await Countries.findAll({
        include: {
        model: Activity,
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    });
        return res.status(200).json(countrys);
    } catch (error) {
       return res.status(404).json({ error: error.message });
}
}

module.exports = {
    getDataCountry,
    getDBCountrys
};
