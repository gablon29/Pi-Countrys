const { Router } = require("express");
const { postActByBody } = require("../controllers/postActByBody");
const { getActById } = require("../controllers/getActById");
const routerAct = Router();

routerAct.post("/activity", async (req, res) => {
    try {
    const {ID, Nombre, Dificultad, Duracion, Temporada} = req.body;
    const myActivity = await postActByBody({ID, Nombre, Dificultad, Duracion, Temporada})
    res.status(200).send({message: 'Actividad creada con exito'});
    }
    catch (error) {
        res.status(200).json({ error: error.message });
    }
})

routerAct.get("/activity/:id", getActById)

module.exports = routerAct;