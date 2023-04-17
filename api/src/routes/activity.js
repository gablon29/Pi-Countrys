const { Router } = require("express");
const { postActByBody } = require("../controllers/postActByBody");
const routerAct = Router();

routerAct.post("/myActivity", async (req, res) => {
    try {
    const {ID, Nombre, Dificultad, Duracion} = req.body;
    const myActivity = await postActByBody({ID, Nombre, Dificultad, Duracion})
    res.status(200).send({message: 'Actividad creada con exito'});
    }
    catch (error) {
        res.status(200).json({ error: error.message });
    }
})

module.exports = routerAct;