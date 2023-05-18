const express = require("express");
const router = express.Router();

const FoodTruckController = require("../controllers/foodTruckController");
const foodTruckController = new FoodTruckController();

router.get("/:truckId", foodTruckController.getTruck);
router.post("/:truckId", foodTruckController.postTruck )
module.exports = router;
