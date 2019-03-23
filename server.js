var express = require("express");
var moment = require("moment");
var app = express();

const PORT = "4000";

app.get("/", function(req, res) {
  res.send("<h1>Hello nha!!!</h1>");
});

const time = moment().format("MMMM Do YYYY, h:mm:ss a");
app.get("/about", function(req, res) {
  res.send(
    "<center><h1>This is about us page</h1><h3>Hello everyone</h3><h2>" +
      time +
      "</h2></center>"
  );
});

app.listen(process.env.PORT || PORT);
