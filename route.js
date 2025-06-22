// express-route.js

const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
