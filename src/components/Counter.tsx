import React from 'react';

import { useCounter } from '../hooks/useCounter';

export const Counter: React.FC = () => {
  const { value, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{value}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
