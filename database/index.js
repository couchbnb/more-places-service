const connection = require('./seeder.js');

const getInfo = (room, cb) => {
  connection.Host.find().exec(cb);
};

module.exports = {
  getInfo,
};
