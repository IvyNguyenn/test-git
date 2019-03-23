var express = require("express");
var app = express();

const PORT = "4000";

app.get("/", function(req, res) {
  res.send("<h1>Hello nha!!!</h1>");
});

app.listen(process.env.PORT || PORT);
