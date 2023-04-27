const { Countries, Activity } = require("../db");
const axios = require('axios')

// we map the api data!
const getDataApi = async (dataAPi) => {
  try {
    let apiData = await axios.get('https://restcountries.com/v3/all')
    dataAPi = await apiData.data.map(({ cca3, name, flags, continents, capital, subregion, area, population }) => {
      return {
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
  } catch (error) {
    return {
      error: error.message
    }
  }
  return dataAPi
}

// function to create the records of the table
const getDataCountry = async (count) => {
  const countryDB =  await Countries.findOrCreate({
    where: {
      ID: count.ID,
      Nombre: count.Nombre,
    },
    defaults: {
      Bandera: count.Bandera,
      Continente: count.Continente,
      Capital: count.Capital,
      Subregion: count.Subregion,
      Area: count.Area,
      Poblacion: count.Poblacion
    }
  }).catch(error => {
    return {error: error.message}
  })
  return countryDB;
}


// create the records of the table
const creatingRecords = async (req, res) => {
  try {
    const dataAPi = await getDataApi();
    dataAPi.forEach(async (country) => {
      const { ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion } = country;
      return await getDataCountry({ ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion })
    })
    res.status(200).send('Data Base Creada')
         
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// we take the records of the base for the front
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
    creatingRecords,
    getDBCountrys
};
