const { Router } = require('express');
const axios = require('axios');
const {getDataCountry} = require("../controllers/getCountrys")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/", async (req, res) => {
    try {
      let apiData = await axios.get('https://restcountries.com/v3/all')
        let data =  apiData.data.map(({cca3, name, flags, continents, capital, subregion, area, population }) =>  {
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

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
