/* eslint-disable indent */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/couchbnb');

const hostSchema = mongoose.Schema({
    roomid: {
        type: Number,
    },
    host: {
        type: Array,
    },
});

const Host = mongoose.model('Host', hostSchema);

const desArr = [
    'Entire House 4 beds', 'Entire Apartment 1 bed', 'Entire Apartment 3 beds', 'Entire Suite 4 beds',
    'Entire House 2 beds', '3B/2.5B Ocean View', 'Entire Apartment Antibes', 'Entire Apartment Cannes',
    'Entire Guest Suite', 'Entire House 4 beds', 'Entire Suite 6 beds', 'Entire House 3 beds', 'Entire House 5 beds',
];
const nameArr = [
    'Loft luxe centre', 'VESTA - El Gouna Residence', 'Joli appartement typiquement bruxellois', 'Valle de Guadalupe',
    'Casa El Sueño', 'Luxury Modern Bojo', 'Villa de La Rosa', 'Villa avec piscine exclusive à Cannes',
    'Attico Su Firenze', 'Casa di Delizie', '海ノ離レ', '日貫一日',
];

for (let i = 1; i < 101; i += 1) {
    const records = new Host({
        roomid: i,
        host: [],

    });

    for (let j = 1; j < 13; j += 1) {
        const singHost = {
            key: j,
            picture: `https://couchbnbpic.s3-us-west-1.amazonaws.com/pics/couchbnb_pic/${j}.jpg`,
            star: faker.random.number({
                min: 1,
                max: 5,
                precision: 0.1,
            }),
            review: faker.random.number({
                min: 4,
                max: 200,
            }),
            description: desArr[j],
            name: nameArr[j],

            price: `$${faker.random.number({ min: 150, max: 1000 })}/night`,
            superhost: Math.random() > 0.7,
            heart: {
                default: false,
            },
        };

        records.host.push(singHost);
    }

    // records.save((err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     // else {
    //     //     console.log('saved')
    //     // }
    // });
}

module.exports = {
    Host,
};
