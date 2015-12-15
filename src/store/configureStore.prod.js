import { createStore, compose, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
import reduxPromise from 'redux-promise';
import rootReducer from '../reducers';

export default function configureStore(router, initialState) {
  const finalCreateStore = compose(
    applyMiddleware(router5Middleware(router)),
    applyMiddleware(reduxPromise)
  )(createStore);

  return finalCreateStore(rootReducer, initialState);
}
