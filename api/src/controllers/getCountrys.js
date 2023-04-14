const axios = require("axios");
const { Countries } = require("../db");

const getDataCountry = (count) => {
    const countryDB = Countries.create(count)
    return countryDB;
}

const getDBCountrys = async (req, res) => {
    try {
        const countrys = await Countries.findAll()
        res.status(200).json(countrys);

    } catch (error) {
        res.status(404).json({ error: error.message });
}
}

module.exports = {
    getDataCountry,
    getDBCountrys
};
