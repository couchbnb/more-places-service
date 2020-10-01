const connection = require('./seeder.js');

const getInfo = (term, cb) => {
  // console.log(term)
  connection.Host.find(term).exec(cb);
  // connection.Host.aggregate.sample(1).exec(cb)
  // Listings.aggregate([{ $sample: { size: 1}}]).exec()
};
module.exports = {
  getInfo,
};
