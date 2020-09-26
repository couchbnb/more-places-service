const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/couchbnb');


let hostSchema = mongoose.Schema({
    roomid: {
        type: Number,
    },
    host: {
        type: Array
    }
});


let Host = mongoose.model('Host', hostSchema);

for (let i = 1; i < 101; i++) {
    let records = new Host({
        roomid: i,
        host: []

    })

    for (let i = 0; i < 12; i++) {
        let singHost = {
            picture: `https://couchbnbpic.s3-us-west-1.amazonaws.com/pics/couchbnb_pic/${i}.jpg`,
            star: faker.random.number({
                'min': 1,
                'max': 5,
                'precision': 0.1
            }),
            review: faker.random.number({
                'min': 4,
                'max': 200
            }),
            description: 'Entire House 4beds',
            name: 'VESTA - El Gouna Residence',

            price: faker.commerce.price(100, 1000),
            superhost: {
                default: false
            },
            heart: {
                default: false
            }
        }

        records.host.push(singHost)
    }

    records.save((err) => {
        if (err) { console.log(err) }
        // else {
        //     console.log('saved')
        // }
    })
}


let getInfo = (room, cb) => {
    Host.find().exec(cb)
}

module.exports = {
    getInfo
}
