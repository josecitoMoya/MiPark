const express = require("express");
const router = express.Router();

const ParkingController = require("../controllers/parkings");

router.get("/search/allparkings", ParkingController.getAllParkings);
router.get("/search/:id", ParkingController.getOneParking);
router.get("/search/barrio/:nombre", ParkingController.getParkingsPorBarrio);
router.get("/search/ciudad/:nombre", ParkingController.getParkingsPorCiudad);
router.get("/search/provincia/:nombre", ParkingController.getParkingsPorProvincia);
router.get("/search/horarios/:id", ParkingController.getHorariosPorId)
//RUTA PROVISORIA PARA CREAR TABLAS DE PARKINGS PARA SPRINT 1
router.post("/crearparking", ParkingController.crearParkingPrueba)
//RUTA PROVISORIA PARA CREAR TABLAS DE HORARIOS PARA SPRINT 1
router.post("/crearhorarios", ParkingController.crearHorariosPrueba)

module.exports = router;
