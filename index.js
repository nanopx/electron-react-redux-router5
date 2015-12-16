require('babel-core/register')();
require('babel-polyfill');

// require the main electron application
if (process.env.NODE_ENV === 'production') {
  require('./main.prod');
} else {
  require('./main.dev');
}
