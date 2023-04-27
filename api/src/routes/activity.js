const { Router } = require("express");
const { createActivities } = require('../controllers/createAct')
const { getActById } = require("../controllers/getActById");
const { getAllActivity } = require("../controllers/getAllActivity");
const routerAct = Router();

routerAct.get("/", getAllActivity)

routerAct.post("/", createActivities)

routerAct.get("/:name", getActById)


module.exports = routerAct;