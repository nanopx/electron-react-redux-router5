/**
 * Main client entry, loads redux's DevTools depending of the environment
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./client/client.prod');
} else {
  module.exports = require('./client/client.dev');
}
