import { createStore } from "redux";

const operations = Object.freeze({
  add: 0,
  subtract: 1,
  multiply: 2,
  divide: 3,
  percent: 4,
  toggle: 5,
  clear: 6,
  dot: 7,
  result: 8
});

function contentReducer(
  state = {
    displayContent: 0,
    cumContent: 0,
    operation: null,
    operationVisible: null,
  },
  action
) {
  switch (action.type) {
    case "action/result":
      if (state.operation === operations.add) {
        return {
          cumContent: state.cumContent + state.displayContent,
          displayContent: state.cumContent + state.displayContent,
          operation: null,
        };
      } else if (state.operation === operations.subtract) {
        return {
          cumContent: state.cumContent - state.displayContent,
          displayContent: state.cumContent - state.displayContent,
          operation: null,
        };
      } else if (state.operation === operations.multiply) {
        return {
          cumContent: state.cumContent * state.displayContent,
          displayContent: state.cumContent * state.displayContent,
          operation: null,
        };
      } else if (state.operation === operations.divide) {
        return {
          cumContent: state.cumContent / state.displayContent,
          displayContent: state.cumContent / state.displayContent,
          operation: null,
        };
      } else if (state.operation === operations.toggle) {
        return {
          cumContent: state.cumContent * -1,
          displayContent: state.cumContent * -1,
          operation: null,
        };
      } else {
        return state;
      }
    case "action/add":
      return {
        cumContent: state.displayContent,
        displayContent: state.displayContent,
        operation: operations.add,
        operationVisible: operations.add,
      };
    case "action/subtract":
      return {
        cumContent: state.displayContent,
        displayContent: state.displayContent,
        operation: operations.subtract,
        operationVisible: operations.subtract,
      };
    case "action/multiply":
      return {
        cumContent: state.displayContent,
        displayContent: state.displayContent,
        operation: operations.multiply,
        operationVisible: operations.multiply,
      };
    case "action/divide":
      return {
        cumContent: state.displayContent,
        displayContent: state.displayContent,
        operation: operations.divide,
        operationVisible: operations.divide,
      };
    case "action/clear":
      return {
        cumContent: 0,
        displayContent: 0,
        operation: null,
        operationVisible: null,
      };
    case "action/toggle":
      return {
        cumContent: state.cumContent * -1,
        displayContent: state.displayContent * -1,
        operation: null,
        operationVisible: null,
      };
    case "content":
      if (state.operationVisible !== null) {
        return {
          displayContent: Number(action.value),
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + action.value;
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: state.operationVisible,
        };
      }
    default:
      return state;
  }
}

const store = createStore(contentReducer);

export default store;
