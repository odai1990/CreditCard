const express = require("express");
const db = require('./connectionDB')
const luhn10 = require('./luhn10')
const PORT = process.env.PORT || 3001;
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.get("/getAll", cors(), (req, res) => {
  db.serialize(() => {
    let sql = "SELECT Id,* FROM Credit";
    db.all(sql, [], (err, rows) => {
      if (err)
        res.json({ data: 'Somthing wrong with database', status: 'Error', type: 'DataBase' });
      else
        res.send({ data: rows, status: 'success', });
    });
  });
});

app.post("/add", cors(), (req, res) => {
  if (luhn10(req.body.cardNumber))
    db.serialize(() => {
      const stmt = db.prepare("INSERT INTO Credit (cardName,CardNumber) VALUES(?,?) ");
      stmt.run(req.body.cardName, Number(req.body.cardNumber));
      stmt.finalize((err, data) => {
        if (err)
          res.json({ data: 'Somthing wrong with database', status: 'error', type: 'DataBase' });
        else
          res.send({ data: 'Credit Card information has been saved successfully', status: 'success', });
      });
    });
  else
    res.send({ data: 'Credit Card Number is not valid', status: 'error', });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

