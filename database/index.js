const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://mongodb/couchbnb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoDB is now connected');
});

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
  Host.find(term).exec(cb);
};

module.exports = {
  getInfo,
  Host,
};
