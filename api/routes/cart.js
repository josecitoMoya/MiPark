const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart");

router.post("/addcart", CartController.addCart);
router.delete("/removecart:id", CartController.removeCart);
router.put("/editcart:id", CartController.editCart);
router.get("/allcarts:id", CartController.allCart);

router.post("/createcarrito")

module.exports = router;
