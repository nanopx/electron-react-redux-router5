/* eslint strict: 0 */
'use strict';

// require the main electron application
if (process.env.NODE_ENV === 'development') {
  require('babel-register')();
  require('babel-polyfill');
  require('./main.dev');
} else {
  require('./main.prod');
}
