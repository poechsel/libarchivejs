const path = require('path');

module.exports = {
  entry: './main.js',
  mode: 'production',
  output: {
    filename: 'libarchive.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'libarchivejs'
  }
};
