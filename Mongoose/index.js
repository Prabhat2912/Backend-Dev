const express = require("express");
const app = express();
const port = 3000 || process.env.port;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Hello");
});
