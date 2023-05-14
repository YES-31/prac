const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("default url for sample.js GET Method");
});

const foodTruckRouter = require("./foodTruck.routes");
router.use("/foodTruckInfo", foodTruckRouter);

router.get("/about", (req, res) => {
  res.send("sample.js about PATH");
});

module.exports = router;
