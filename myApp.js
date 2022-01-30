var bodyParser = require('body-parser')
var express = require('express');
var app = express();
// console.log("Hello World");

// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

app.use(function(req, res, next) {
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
});

absolutePath = __dirname + "/views/index.html"

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res) {
  if(process.env.MESSAGE_STYLE==="uppercase"){
    res.json({"message": "HELLO JSON"});
  }
  res.json({"message": "Hello json"});
});

// app.get("/now", function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req, res) {
//   res.send({time: req.time});
// });

// app.get("/:word/echo", function(req, res, next) {
//   word = req.params.word;
//   next();
// }, function(req, res) {
//   res.send({echo: word});
// });

app.get("/name", function(req, res) {
  var fName = req.query.first
  var lName = req.query.last

  var { first: firstName, last: lastName } = req.query;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json());

app.post("/name", function(req, res) {
  var fName = req.body.first
  var lName = req.body.last

  var { first: firstName, last: lastName } = req.body;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

































 module.exports = app;
