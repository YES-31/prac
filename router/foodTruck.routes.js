const express = require("express");
const router = express.Router();

const foodTruckController = require("../controllers/foodTruckController");

router.get("/", foodTruckController.getTruck);
