const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
const database = require("./database.js");

//helpers
const generateId = Math.floor(Math.random() * 10);

app.use(cors());

//Body parser
app.use(express.urlencoded({ extended: false })).use(express.json());

app.get("/", (req, res) => {
  id = generateId;
  database[id] = { company: "New horizon", quote: 200 };
  const allCompanyNames = Object(database[id].company);
  console.log(allCompanyNames);
  res.send(id + " -> " + allCompanyNames);
});

app.get("/quotes/:id", (req, res) => {
  const searchId = req.params.id;
  const foundCompany = database[searchId];
  console.log(searchId + "->" + foundCompany);
  res.send(foundCompany);
});

app.get("/quotes", (req, res) => {
  const allQuotes = database;
  res.send(allQuotes);
});

app.post("/quotes", (req, res) => {
  id = generateId;
  database[id] = {
    company: req.body.company,
    soil_type: req.body.soil_type,
    quote: req.body.quote,
    quantity: req.body.quantity,
    pick_up_point: req.body.pick_up_point,
    phone: req.body.phone
  };
  res.send(database[id]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
