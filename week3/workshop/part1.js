const express = require("express");
const path = require("path");

const VIEWS_PATH = path.join(__dirname, "/views/");
const app = express();
const PORT_NUMBER = 8080;
const print = console.log;
app.use(express.static("node_modules/bootstrap/dist/css"));

app.get("/", function(req, res) {
  let fileName = VIEWS_PATH + "index.html";
  res.sendFile(fileName);
})

app.get("/info", function(req, res) {
  let fileName = VIEWS_PATH + "info.html";
  res.sendFile(fileName);
})

app.get("/week3", function(req, res) {
  res.send("<h1>Congrats!! You created a new endpoint</h1>");
})

app.get("/lab3", function(req, res) {
  res.send("<h1>Another example of <i>endpoint</i>.</h1>");
})

app.get("/add/:x/:y/:z", function(req, res) {
  let x = parseInt(req.params.x);
  let y = parseInt(req.params.y);
  let z = parseInt(req.params.y);

  let result = x + y + z
  res.send(`The sum of ${x} + ${y} + ${z} is ${result}`);
})

app.get("/add/", function(req, res) {
  let x = parseInt(req.query.x);
  let y = parseInt(req.query.y);
  let z = parseInt(req.query.y);

  let result = x + y + z
  res.send(`The sum of ${x} + ${y} + ${z} is ${result}`);
})

app.get("/sub/:x/:y/:z", function(req, res) {
  let x = parseInt(req.params.x);
  let y = parseInt(req.params.y);
  let z = parseInt(req.params.y);

  let result = x - y - z
  res.send(`The difference of ${x} - ${y} - ${z} is ${result}`);
})

app.get("/sub/", function(req, res) {
  let x = parseInt(req.query.x);
  let y = parseInt(req.query.y);
  let z = parseInt(req.query.y);

  let result = x - y - z
  res.send(`The difference of ${x} - ${y} - ${z} is ${result}`);
})
app.listen(PORT_NUMBER, function() {
  print(`Server is running at http://localhost:${PORT_NUMBER}`)
}) 