const { Router } = require('express');
const RouterCountry = require("./countrys");
const routerAct = require('./activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/country", RouterCountry)
router.use("/activity", routerAct)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
