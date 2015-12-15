require('babel-core/register')();
require('babel-polyfill');
require('./main');
// if (process.env.NODE_ENV === 'production') {
//   require('./server');
// } else {
//   require('./webpack.server');
// }
