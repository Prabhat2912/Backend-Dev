require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Prabhat");
});

app.get("/twitter", (req, res) => {
  res.send("real_prabhat1");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/insta", (req, res) => {
  res.send("<a href='https://www.instagram.com/real_prabhat1' >insta/</a>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example ${port}`);
});
