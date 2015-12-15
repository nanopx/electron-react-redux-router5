/**
 * A simple logger for logging server-side actions
 */
const logger = (store) => (next) => (action) => { // eslint-disable-line no-unused-vars
  if (__SERVER__) {
    console.info(`=> Dispatching action: ${action.type}`);  // eslint-disable-line no-console
  }
  return next(action);
};

export default logger;
