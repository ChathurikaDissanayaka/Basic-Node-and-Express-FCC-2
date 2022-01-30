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






































 module.exports = app;
