const { Router } = require("express");
const axios = require('axios');
const RouterCountry = Router();
const { getDataCountry, getDBCountrys } = require("../controllers/getCountrys");
const { getCountryByName } = require("../controllers/getCountryByName")

RouterCountry.get("/", async (req, res) => {
    try {
      let apiData = await axios.get('https://restcountries.com/v3/all')
        let data = await apiData.data.map(({cca3, name, flags, continents, capital, subregion, area, population }) =>  {
                    return  {
                        ID: cca3,
                        Nombre: name.common,
                        Bandera: flags[0],
                        Continente: continents[0],
                        Capital: capital ? capital[0] : 'Not found',
                        Subregion: subregion ? subregion : 'Not found',
                        Area: area,
                        Poblacion: population
                    }

            })
            data.forEach((country) => {
                const { ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion } = country;
               return  getDataCountry({ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion})
            })
            res.status(200).json(data)
            
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

RouterCountry.get("/myCountries", getDBCountrys)

RouterCountry.get("/myCountry/name", getCountryByName)

module.exports = RouterCountry;