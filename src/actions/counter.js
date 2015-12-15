import { createAction } from 'redux-actions';
import {
  COUNTER_COUNT_UP,
  COUNTER_COUNT_DOWN,
  COUNTER_COUNT_RESET,
} from '../constants';

export const countUp = createAction(COUNTER_COUNT_UP);
export const countDown = createAction(COUNTER_COUNT_DOWN);
export const countReset = createAction(COUNTER_COUNT_RESET);
