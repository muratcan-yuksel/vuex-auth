require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

//add this so we won't get "cannot get / error "
app.get("/", function (req, res) {
  res.send("Hello world");
});
app.post("/login", (req, res) => {
  const USERNAME = "user";
  const PASSWORD = "123";

  // const username = req.body;
  // const password = req.body;
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    //we're good, 200 ok
    const user = {
      id: 1,
      name: "cody",
      username: "user",
    };
    const token = jwt.sign({ foo: "bar" }, process.env.JWT_KEY);
    res.json({
      token,
      user,
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
