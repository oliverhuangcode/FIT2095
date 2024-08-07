const express = require("express");
const path = require("path");

const print = console.log;
const VIEWS_PATH = path.join(__dirname, "/views/"); //Important

const PORT_NUMBER = 8080;

let app = express();
app.use(express.static("node_modules/bootstrap/dist/css"));
app.listen(PORT_NUMBER, function () {
	print(`Server is running at http://localhost:${PORT_NUMBER}`)
});

// Home
app.get('/', function (req, res) {
  fileName = VIEWS_PATH + "index.html";
  res.sendFile(fileName);
});

// Add
app.get('/item/', function (req, res) {// parameter
  price = Math.floor(Math.random() * 100)
  res.send(`The cost of ${req.query.quantity} ${req.query.name}(s) is $${price * parseInt(req.query.quantity)}`)
});

// Info
app.get('/contact', function (req, res) {
  fileName = VIEWS_PATH + "location.html";
  res.sendFile(fileName);
});

app.get('*', function (req, res) {
  fileName = VIEWS_PATH + "404.html";
  res.sendFile(fileName);
})