var express = require("express");

var app = express();
var bodyparser = require("body-parser");


app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'POST,GET,PUT,DELETE,OPTIONS');
  next();
});

app.get("/", function(res,req){
	res.send(200, "connected");
});

app.listen(3000);