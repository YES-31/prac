const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

// const { ApiError } = require("../utils/apiError");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true, // default: false
  })
);

// router 미들웨어를 사용하겠다 선언
const sampleRouter = require("./router/sample.js");
app.use("/sample", [sampleRouter]);

app.get("/", (req, res) => {
  res.send("서버 실행 확인_");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
