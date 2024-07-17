import { createSlice, configureStore } from "@reduxjs/toolkit";

const operations = Object.freeze({
  add: 0,
  subtract: 1,
  multiply: 2,
  divide: 3,
  percent: 4,
  toggle: 5,
  clear: 6,
  dot: 7,
  result: 8,
});

const operationsMap = {
  [operations.add]: (a, b) => a + b,
  [operations.subtract]: (a, b) => a - b,
  [operations.multiply]: (a, b) => a * b,
  [operations.divide]: (a, b) => a / b,
  [operations.percent]: (a) => a / 100,
  [operations.toggle]: (a) => a * -1,
};

const contentSlice = createSlice({
  name: "content",
  initialState: {
    displayContent: 0,
    cumContent: 0,
    operation: null,
    operationVisible: null,
  },
  reducers: {
    result(state) {
      const operationFn = operationsMap[state.operation];
      if (operationFn) {
        const result =
          state.operation === operations.toggle || state.operation === operations.percent
            ? operationFn(state.cumContent)
            : operationFn(state.cumContent, state.displayContent);
        (state.cumContent = 0), (state.displayContent = result);
      }
    },
    addAction(state) {
      state.cumContent = state.cumContent + state.displayContent;
      state.operation = operations.add;
      state.operationVisible = operations.add;
    },
    subAction(state) {
      state.cumContent =
        state.cumContent == 0
          ? state.displayContent
          : state.cumContent - state.displayContent;
      state.operation = operations.subtract;
      state.operationVisible = operations.subtract;
    },
    multiplyAction(state) {
      state.cumContent =
        state.cumContent == 0
          ? state.displayContent
          : state.cumContent * state.displayContent;
      state.operation = operations.multiply;
      state.operationVisible = operations.multiply;
    },
    divideAction(state) {
      state.cumContent =
        state.cumContent == 0
          ? state.displayContent
          : state.cumContent / state.displayContent;
      state.operation = operations.divide;
      state.operationVisible = operations.divide;
    },
    percentAction(state) {
      state.cumContent = state.cumContent / 100;
      state.displayContent = state.displayContent / 100;
      state.operation = null;
      state.operationVisible = null;
    },
    clearAction(state) {
      state.cumContent = 0;
      state.displayContent = 0;
      state.operation = null;
      state.operationVisible = null;
    },
    toggleAction(state) {
      state.cumContent = state.cumContent * -1;
      state.displayContent = state.displayContent * -1;
      state.operation = null;
      state.operationVisible = null;
    },

    number(state, action) {
      if (state.operationVisible !== null) {
        state.displayContent = Number(action.payload);
        state.operationVisible = null;
      } else {
        let updatedDisplay = state.displayContent + action.payload;
        state.displayContent = Number(updatedDisplay);
      }
    },
  },
});

const store = configureStore({
  reducer: contentSlice.reducer
});

export const contentActions = contentSlice.actions;

export default store;
