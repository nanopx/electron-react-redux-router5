import React, { PropTypes } from 'react';

const Counter = (props) => {
  const { countUp, countDown, countReset, counter } = props;
  return (
    <p>
      Clicked {counter} times!
      {' '}
      <button onClick={countUp}>+</button>
      {' '}
      <button onClick={countDown}>-</button>
      {' '}
      <button onClick={countReset}>reset</button>
    </p>
  );
};

Counter.propTypes = {
  countUp: PropTypes.func.isRequired,
  countDown: PropTypes.func.isRequired,
  countReset: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
