const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart");

router.post("/addcart", CartController.addCart);
router.destroy("/removecart:id", CartController.removeCart);
router.put("/editcart:id", CartController.addCart);

module.exports = router;
