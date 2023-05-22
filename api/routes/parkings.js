const express = require("express");
const router = express.Router();

const ParkingController = require("../controllers/parkings");

router.get("/search/allparkings", ParkingController.getAllParkings);
router.get("/search/allpendingparkings", ParkingController.getPendingParkings);
router.get("/search/:id", ParkingController.getOneParking);
router.get("/search/zone/:name", ParkingController.getParkingsByZone);
router.get("/search/city/:name", ParkingController.getParkingsByCity);
router.get("/search/province/:name", ParkingController.getParkingsByProvince);
router.post("/createparking", ParkingController.createParking);
router.put("/authorizeparking", ParkingController.authorizeParking);
router.delete("/deleteparking", ParkingController.deleteParking);

module.exports = router;
