require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.post("/login", (req, res) => {
  res.json({
    message: "hellooo",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
