import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import counter from './counter';
import repository from './repository';

const rootReducer = combineReducers({
  router: router5Reducer,
  counter,
  repository,
});

export default rootReducer;
