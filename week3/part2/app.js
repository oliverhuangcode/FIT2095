const express = require("express");
const path = require("path");
const print = console.log;
const VIEWS_PATH = path.join(__dirname, "/views/"); //Important
const PORT_NUMBER = 8080;

let app = express();
// Database is an array of records
let db = [];

app.use(express.static("node_modules/bootstrap/dist/css"));
app.listen(PORT_NUMBER, function () {
	print(`Server is running at http://localhost:${PORT_NUMBER}`)
});

// Home
app.get('/', function (req, res) {
  fileName = VIEWS_PATH + "index.html";
  res.sendFile(fileName);
});

app.get('/info', function (req, res) {
  fileName = VIEWS_PATH + "info.html";
  res.sendFile(fileName);
});

// Add parcel
app.get('/addparcel', function (req, res) {// parameter
  let newId = Math.floor(Math.random() * 1000);
  let rec = {
    id: newId,
    sender: req.query.sender,
    address: req.query.address
  }
  db.push(rec)
  res.send(generateList())
});

app.get('/getparcels', function (req, res) {
  res.send(generateList())
})

app.get('/deleteid/:idToDelete', function (req, res) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id === parseInt(req.params.idToDelete)) {
      db.splice(i, 1)
      break;
    }
  }
  res.send(generateList())
})

function generateList() {
  let st = 'ID  Sender   Address  </br>';
  for (let i = 0; i < db.length; i++) {
      st += db[i].id + ' | ' + db[i].sender + ' | ' + db[i].address + '</br>';
  }
  return st;
}
