const express = require("express");
const router = express.Router();

const ReservesController = require("../controllers/reserves");

router.post("/add-reserve", ReservesController.addReserve);
router.delete("/remove-reserve:id", ReservesController.removeReserve);
router.put("/state:id", ReservesController.updateState);
router.get("/allreserves:userId", ReservesController.allReserves);
router.get("/allreservesPark/:parkId", ReservesController.allReservesPark);
router.get("/adminallreserves", ReservesController.allReservesAdmin);

module.exports = router;
