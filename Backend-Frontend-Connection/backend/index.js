const express = require("express");
const app = express();
const port = 3000 || process.env.port;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke1",
      content: "Hwllo ",
    },
    {
      id: 2,
      title: "Joke2",
      content: "Hwllo ",
    },
    {
      id: 3,
      title: "Joke3",
      content: "Hwllo ",
    },
    {
      id: 4,
      title: "Joke4",
      content: "Hwllo ",
    },
    {
      id: 5,
      title: "Joke5",
      content: "Hwllo ",
    },
    {
      id: 6,
      title: "Joke6",
      content: "Hwllo ",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log("Hello");
});
