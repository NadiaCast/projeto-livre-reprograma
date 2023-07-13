const controller = require("../controllers/planosController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllPlanos);

router.post("/add", controller.addNewPlano);

router.patch("/updateplano/:id", controller.updatePlano);

router.delete("/deleteplano/:id", controller.deletePlano);

module.exports = router;