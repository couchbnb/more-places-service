const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/couchbnb');

const db = mongoose.connection;

const hostSchema = mongoose.Schema({
  roomid: {
    type: Number,
  },
  host: {
    type: Array,
  },
});

const Host = mongoose.model('Host', hostSchema);

const getInfo = (term, cb) => {
  // console.log(term)
  Host.find(term).exec(cb);
  // connection.Host.aggregate.sample(1).exec(cb)
  // Listings.aggregate([{ $sample: { size: 1}}]).exec()
};

module.exports = {
  getInfo,
  Host,
};
