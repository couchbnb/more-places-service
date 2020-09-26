const express = require('express');
let app = express();
let bodyParser = require('body-parser');
const db = require('../database/seeder.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/couchbnb', (req, res) => {
  db.getInfo({}, (err, response) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    }
    console.log('resp: ', response);
    res.status(200).send(response);
  });
});

let port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});