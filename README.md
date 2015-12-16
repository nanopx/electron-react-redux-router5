# electron-react-redux-router5
A boilerplate using Electron + React + Redux + Router5, including hot module replacements.
- Universal web-app version of this boilerplate using [hapi](http://hapijs.com/) could be found here: [universal-react-redux-hapi](https://github.com/nanopx/universal-react-redux-hapi)
- Client-only web-app version of this boilerplate could be found here: [react-redux-router5](https://github.com/nanopx/react-redux-router5)

[![Dependency Status](https://david-dm.org/nanopx/electron-react-redux-router5.svg?style=flat-square)](https://david-dm.org/nanopx/electron-react-redux-router5)
[![devDependency Status](https://david-dm.org/nanopx/electron-react-redux-router5/dev-status.svg?style=flat-square)](https://david-dm.org/nanopx/electron-react-redux-router5#info=devDependencies)

## Features
* [Electron](http://electron.atom.io/)
  - For building desktop apps.
* [electron-packager](https://github.com/maxogden/electron-packager)
  - For packaging electron apps.
* [React Hot Loader](https://gaearon.github.io/react-hot-loader/)
  - For hot reloads.
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
  * For building bundles.
* [Babel6](https://babeljs.io/)
  * For transpiling ES6(ES2015), and ES7(ES2016).
* [ESLint](http://eslint.org/)
  * For linting.
* [mocha](https://mochajs.org/), [nock](https://github.com/pgte/nock) & [power-assert](https://github.com/power-assert-js/power-assert)
  * For testing.
  * power-assert supports async/await, which can be used with [redux-promise](https://github.com/acdlite/redux-promise)

> Personally, I think Router5 is better for managing the `props` than [React Router](https://github.com/rackt/react-router).
> No `React.cloneElement` with `this.props.children`, no confusion with React's `props`, etc.

## Getting started
**First steps...**
```
$ git clone https://github.com/nanopx/electron-react-redux-router5.git MyApp
$ cd MyApp
$ npm install
```
> NOTE: You may need to `$ npm install electron-prebuilt -g`

**Start development server**
```
$ NODE_ENV=development npm start
```
OR
```
$ npm run start-dev
```
> This automatically fires the App.
> Alternatively, you can use your browser to develop your app. Go to `http://localhost:3000` in your browser.

**Creating the package**
```
$ npm run package
```
> The app will be created under `./release/`

> See `./package.js` and [here](https://github.com/maxogden/electron-packager) for packaging options.

**Linting**
```
$ npm run lint
```
`$ npm run start-dev` will also lint your codes every time it builds.


**Testing**
```
$ npm test
```

## License
MIT
