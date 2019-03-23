var express = require("express");
var app = express();

const PORT = "4000";

app.get("/", function(req, res) {
  res.send("<h1>Hello nha!!!</h1>");
});

app.get("/login", function(req, res) {
  res.send(
    "<center><h1>Login page!</h1><input type='text'/><br><br><input type='submit'/></center>"
  );
});

app.listen(process.env.PORT || PORT);
