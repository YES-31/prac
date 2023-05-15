const express = require("express");
const router = express.Router();

const FoodTruckController = require("../controllers/foodTruckController");
const foodTruckController = new FoodTruckController();

router.get("/:truckId", foodTruckController.getTruck);

module.exports = router;
