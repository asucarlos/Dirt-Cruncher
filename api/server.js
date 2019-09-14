const express                       = require('express');
const app                           = express();
const bodyParser                    = require('body-parser')
const cors                          = require('cors')
const port                          = 8080
const database                      = require('./database.js');

app.use(cors());


app.get('/', (req, res) => {
  database[3] = {company: 'New horizon', quote: 200}
  const allCompanyNames = Object(database[3].company)
  console.log(allCompanyNames)
  res.send('Welcome to hackethon oxford toronto 2019' + allCompanyNames)
});

app.get('/quotes/:id', (req, res) => {
  const searchId = req.params.id
  const foundCompany = database[searchId]
  console.log(searchId + '->' + foundCompany)
  res.send(foundCompany)
});

app.get('/quotes', (req, res) => {
  const allQuotes = database
  res.send(allQuotes)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
