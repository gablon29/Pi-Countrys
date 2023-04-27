const { Router } = require("express");
const RouterCountry = Router();
const { creatingRecords, getDBCountrys } = require("../controllers/getCountrys");
const { getCountryByName } = require("../controllers/getCountryByName");
const { getCountryById } = require("../controllers/getCountryById");

RouterCountry.get("/", creatingRecords)

RouterCountry.get("/countries", getDBCountrys)

RouterCountry.get("/countries/name", getCountryByName)

RouterCountry.get("/countries/:id", getCountryById);

module.exports = RouterCountry;
