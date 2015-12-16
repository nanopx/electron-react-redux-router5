const packager = require('electron-packager');
const pkg = require('./package.json');
const devDeps = Object.keys(pkg.devDependencies);

 // . TestApp --platform=darwin --arch=x64 --version=0.36.0 --out=release --ignore='node_modules/(electron-packager|electron-prebuilt)'
const opts = {
  dir: './',
  out: 'release',
  name: 'TestApp',
  platform: 'darwin',
  arch: 'x64',
  version: '0.36.0',
  'app-version': pkg.version,
  ignore: [
    '/src($|/)',
    '/test($|/)',
    '/release($|/)',
  ].concat(devDeps.map((name) => `/node_modules/${name}($|/)`)),
};

console.info('Packaging application...'); // eslint-disable-line no-console
packager(opts, function done(err/* , appPath */) {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  }
  console.info('Done!'); // eslint-disable-line no-console
});
