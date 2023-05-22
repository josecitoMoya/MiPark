const express = require("express");
const router = express.Router();

const ParkingController = require("../controllers/parkings");

router.get("/search/allparkings", ParkingController.getAllParkings);
router.get("/search/:id", ParkingController.getOneParking);
router.get("/search/", ParkingController.getParkingsByCategories);
router.post("/createparking", ParkingController.createParking);
router.put("/drop-parking", ParkingController.dropParking);

module.exports = router;