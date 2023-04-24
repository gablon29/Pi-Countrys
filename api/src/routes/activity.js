const { Router } = require("express");
const { postActByBody } = require("../controllers/postActByBody");
const { Countries, Activity } = require('../db.js');
const { getActById } = require("../controllers/getActById");
const { getAllActivity } = require("../controllers/getAllActivity");
const routerAct = Router();

routerAct.get("/", getAllActivity)

routerAct.post("/", async (req, res) => {
    try {
    const {Nombre, Dificultad, Duracion, Temporada, countryid} = req.body;
        const myActivity = await Activity.create({Nombre, Dificultad, Duracion, Temporada, countryid })
        const countries = await Countries.findAll({
            where: {Nombre: countryid}
        })
        myActivity.addCountries(countries)
        return res.status(200).send({message: 'Actividad creada con exito'});
    }
    catch (error) {
        res.status(200).json({ error: error.message });
    }
})

routerAct.get("/activity/:id", getActById)


module.exports = routerAct;