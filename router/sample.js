const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("default url for sample.js GET Method");
});

const foodTruckRouter = require("./foodTruckRoutes");
router.use("/foodTruckInfo", foodTruckRouter);

router.get("/about", (req, res) => {
  res.send("sample.js about PATH");
});

module.exports = router;
