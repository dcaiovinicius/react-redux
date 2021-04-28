import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  calculate,
  decrement,
  increment,
  counterSelector,
} from '../store/counter';

type CounterOperators = {
  value: number;
  decrement: () => void;
  increment: () => void;
  calculate: (inputName: number) => void;
};

export const useCounter = (): Readonly<CounterOperators> => {
  const dispatch = useDispatch();
  const counterState = useSelector(counterSelector);

  return {
    value: counterState.value,
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
    calculate: useCallback(
      (inputNumber: number) => {
        dispatch(
          calculate({
            inputNumber: inputNumber,
          }),
        );
      },
      [dispatch],
    ),
  };
};
