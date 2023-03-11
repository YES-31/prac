const express = require("express");
const router = express.Router();

const cartRouter = require("./carts.routes"); // 주소 입력
router.use("/carts", cartRouter);

const itemRouter = require("./items.routes");
router.use("/items", itemRouter);

module.exports = router;
