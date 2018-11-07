const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

app.use(cors());
app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(8000, function() {
  console.log("listening on http://localhost:8000");
});
