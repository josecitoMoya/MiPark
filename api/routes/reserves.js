const express = require("express");
const router = express.Router();

const ReservesController = require("../controllers/reserves");

router.post("/add-reserve", ReservesController.addReserve);
router.delete("/remove-reserve:id", ReservesController.removeReserve);
router.put("/state:id", ReservesController.updateState);
router.get("/allreserves:userId", ReservesController.allReserves);

module.exports = router;
