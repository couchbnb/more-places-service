const express = require('express');

const app = express();
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/data', (req, res) => {
// console.log(req.query);
  db.getInfo(req.query, (err, data) => {
    if (err) {
    // console.log('err in server')
      res.status(400).send();
    } else {
      res.status(200).send(data[0]);
      console.log('server: ', data[0])
    }
  });
});
// app.get('/rooms', (req, res) => {
//   db.getInfo({}, (err, data) => {
//     if (err) {
//       console.log('err');
//       res.status(400).send();
//     } else {
//       console.log('data: ', data),
//       res.status(200).send(data),
//     }
//   })
// });

const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
