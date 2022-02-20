require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.post("/login", (req, res) => {
  const USERNAME = "user";
  const PASSWORD = "123";

  // const username = req.body;
  // const password = req.body;
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    //we're good, 200 ok
    res.json({
      message: "hellooo",
    });
  } else {
    res.status(403);
    res.json({
      message: "invalid login info",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
