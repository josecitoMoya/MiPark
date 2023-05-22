const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.get("/users/search/all-users", AdminController.getAllUsers);
router.delete("/users/delete-user", AdminController.deleteUser);
router.put("/users/user-toggle-admin", AdminController.toggleAdmin);
router.get("/parkings/search/all-pending-parkings", AdminController.getPendingParkings);
router.put("/parkings/authorize-parking", AdminController.authorizeParking);
router.put("/parkings/drop-parking", AdminController.dropParking);

module.exports = router;