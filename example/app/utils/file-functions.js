const fs = require('bluebird').promisifyAll(require('fs'));

const readFile = dir => {
  return fs.readFileAsync(dir)
  .then(text => text);
};

module.exports = {
  readFile
};
