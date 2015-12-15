import { createStore, compose, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
// import { persistState } from 'redux-devtools';
import reduxPromise from 'redux-promise';
import rootReducer from '../reducers';
import actionLogger from '../middlewares/actionLogger';
import DevTools from '../containers/DevTools';

export default function configureStore(router, initialState) {
  // const currentPath = initialState ? initialState.router.route.path : '/';
  const finalCreateStore = compose(
    applyMiddleware(router5Middleware(router)),
    applyMiddleware(reduxPromise),
    applyMiddleware(actionLogger),
    DevTools.instrument(),
    // persistState(currentPath.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

  return finalCreateStore(rootReducer, initialState);
}
