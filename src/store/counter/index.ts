import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

/**
 * Payload
 */
export type CounterPayload = {
  inputNumber: number;
};

/**
 * State
 */
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState): CounterState => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state: CounterState): CounterState => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    calculate: (
      state: CounterState,
      action: PayloadAction<CounterPayload>,
    ): CounterState => {
      const { payload } = action;

      return {
        ...state,
        value: (state.value += payload.inputNumber),
      };
    },
  },
});

/**
 * Actions
 */
export const { increment, decrement, calculate } = counterSlice.actions;

/**
 * Reducer
 */
export default counterSlice.reducer;

/**
 * Selector
 */
export const counterSelector = (state: RootState): CounterState =>
  state.counter;
