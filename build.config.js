require('babel-core/register')();
require('babel-polyfill');
const config = require('./webpack.config');
module.exports = config;
