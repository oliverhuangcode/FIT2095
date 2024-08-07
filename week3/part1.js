const express = require("express");
const path = require("path");

const app = express()
const PORT_NUMBER = 8080
const print = console.log
app.get("/", function(req, res) {
  res.send("Welcome to week 3: Server created using express()")
})

app.listen(PORT_NUMBER, function() {
  print(`Server is running at http://localhost:${PORT_NUMBER}`)
}) 