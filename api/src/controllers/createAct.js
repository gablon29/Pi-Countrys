const { Countries, Activity } = require('../db')


const createActivities = async (req, res) => {
    try {
        const { Nombre, Dificultad, Duracion, Temporada, countryid } = req.body;
        const myActivity = await Activity.create({
           Nombre, Dificultad, Duracion, Temporada, countryid })
        const countries = await Countries.findAll({
            where: {Nombre: countryid}
        })
        myActivity.addCountries(countries)
        return res.status(200).send({message: 'Actividad creada con exito'});
    }
    catch (error) {
        res.status(404).send({ error: error.message });
    }
}
module.exports = {
    createActivities
}
        