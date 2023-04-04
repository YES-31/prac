const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PW,
  database: process.env.DB,
});

connection.connect();

// router 미들웨어를 사용하겠다 선언
const sampleRouter = require("./router/sample.js");
app.use("/sample", [sampleRouter]);

app.get("/", (req, res) => {
  res.send("서버 실행 확인_");
});

app.listen(port, () => {
  console.log(`서버 실행. http://localhost:${port}`);
});
