const express = require('express');
let app = express();
const db = require('../database/seeder.js');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));


app.get('/rooms', function (req, res) {
    db.getInfo({}, (err, data) => {
        if (err) {
            console.log('err')
            res.status(400).send()
        }
        console.log('data: ', data)
        res.status(200).send(data)

    })
});


let port = 1128;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});



