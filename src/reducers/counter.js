import {
  COUNTER_COUNT_UP,
  COUNTER_COUNT_DOWN,
  COUNTER_COUNT_RESET,
} from '../constants';

const counter = (state = 0, action) => {
  switch (action.type) {
  case COUNTER_COUNT_UP:
    return state + 1;
  case COUNTER_COUNT_DOWN:
    return state - 1;
  case COUNTER_COUNT_RESET:
    return 0;
  default:
    return state;
  }
};

export default counter;
