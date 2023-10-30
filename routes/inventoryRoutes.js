const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganizationController,
  getOrganizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// Add inventory -> POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records -> GET
router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent blood records -> GET
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get all blood records -> GET
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get donar records -> GET
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospitals records -> GET
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organization records -> GET
router.get("/get-organizations", authMiddleware, getOrganizationController);

//get organization records -> GET
router.get(
  "/get-organizations-for-hospital",
  authMiddleware,
  getOrganizationForHospitalController
);

module.exports = router;
