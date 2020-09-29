const connection = require('./seeder.js');

const getInfo = (term, cb) => {
  // console.log(term)
  connection.Host.find(term).exec(cb);
  // console.log(connection.Host.find({term}))
};
module.exports = {
  getInfo,
};
