var express = require("express");
var app = express();

const PORT = "4000";

app.get("/", function(req, res) {
  res.send("<h1>Hello nha!!!</h1>");
});

app.get("/home", function(req, res) {
  res.send("<h1>This is home page</h1><hr><p>No pain no gain</p>");
});

app.listen(process.env.PORT || PORT);
