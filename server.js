/**
 * A simple script that serves static files.
 */
import express from 'express';
const app = express();
app.use(express.static(__dirname + '/static'));
app.get('*', (req, res) => {
  return res.sendFile(__dirname + '/static/index.html');
});
app.listen(3000, () => {
  console.info('Initialized production server'); // eslint-disable-line no-console
});
