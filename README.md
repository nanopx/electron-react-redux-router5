# electron-react-redux-router5
A boilerplate using Electron + React + Redux + Router5, including hot module replacements.
- Universal web-app version of this boilerplate using [hapi](http://hapijs.com/) could be found here: [universal-react-redux-hapi](https://github.com/nanopx/universal-react-redux-hapi)
- Client-only web-app version of this boilerplate could be found here: [react-redux-router5](https://github.com/nanopx/react-redux-router5)

[![Dependency Status](https://david-dm.org/nanopx/electron-react-redux-router5.svg?style=flat-square)](https://david-dm.org/nanopx/electron-react-redux-router5)
[![devDependency Status](https://david-dm.org/nanopx/electron-react-redux-router5/dev-status.svg?style=flat-square)](https://david-dm.org/nanopx/electron-react-redux-router5#info=devDependencies)

## Features
* [React Hot Loader](https://gaearon.github.io/react-hot-loader/)
  - For hot reloads
* [React](https://facebook.github.io/react/)
  - For the UI.
* [Radium](http://projects.formidablelabs.com/radium/) + [react-styling](https://github.com/halt-hammerzeit/react-styling)
  - For inline styles, which works perfectly with server-side rendering and React's virtual DOM.
* [React Helmet](https://github.com/nfl/react-helmet)
  - For changing `<title>` tag, `<meta>` tags, etc in React.
* [Redux](http://redux.js.org/)
  - For managing app's state.
* [Router5](http://router5.github.io/)
  - For routing.
* [webpack](http://webpack.github.io/)
  * For building client bundles.
* [Babel6](https://babeljs.io/)
  * For transpiling ES6(ES2015), and ES7(ES2016).
* [ESLint](http://eslint.org/)
  * For linting.
* [mocha](https://mochajs.org/), [nock](https://github.com/pgte/nock) & [power-assert](https://github.com/power-assert-js/power-assert)
  * For testing.
  * power-assert supports async/await, which can be used with [redux-promise](https://github.com/acdlite/redux-promise)
* [express](expressjs.com)
  * For production web server (serves static files)

> Personally, I think Router5 is better for managing the `props` than [React Router](https://github.com/rackt/react-router).
> No `React.cloneElement` with `this.props.children`, no confusion with React's `props`, etc.

## WIP

## Getting started
**First steps...**
```
$ git clone https://github.com/nanopx/electron-react-redux-router5.git MyApp
$ cd MyApp
$ npm install
```

**Start development server**
```
$ npm start
```
> This automatically fires the App

**Creating the package**
```
$ NODE_ENV=production npm run build
$ npm run build-app
```
> Will be created under `./release/`

**Linting**
```
$ npm run lint
```
`$ npm start` in development mode, will also lint your codes every time it builds.


**Testing**
```
$ npm test
```

## License
MIT
