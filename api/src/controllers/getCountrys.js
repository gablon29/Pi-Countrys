const axios = require("axios");
const { Countries } = require("../db");

const getDataCountry = (count) => {
    const countryDB = Countries.create(count)
    return countryDB;
}
module.exports = {
    getDataCountry,
};
