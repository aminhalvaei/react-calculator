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
    case "content/1":
      if (state.operationVisible !== null) {
        return {
          displayContent: 1,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "1";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/2":
      if (state.operationVisible !== null) {
        return {
          displayContent: 2,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "2";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/3":
      if (state.operationVisible !== null) {
        return {
          displayContent: 3,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "3";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/4":
      if (state.operationVisible !== null) {
        return {
          displayContent: 4,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "4";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/5":
      if (state.operationVisible !== null) {
        return {
          displayContent: 5,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "5";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/6":
      if (state.operationVisible !== null) {
        return {
          displayContent: 6,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "6";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/7":
      if (state.operationVisible !== null) {
        return {
          displayContent: 7,
          operation : state.operation,
          operationVisible: null,
          cumContent: state.cumContent,
        };
      } else {
        let updatedDisplay = state.displayContent + "7";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/8":
      if (state.operationVisible !== null) {
        return {
          displayContent: 8,
          operation : state.operation,
          operationVisible: null,
          cumContent: state.cumContent,
        };
      } else {
        let updatedDisplay = state.displayContent + "8";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/9":
      if (state.operationVisible !== null) {
        return {
          displayContent: 9,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "9";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    case "content/0":
      if (state.operationVisible !== null) {
        return {
          displayContent: 0,
          cumContent: state.cumContent,
          operation : state.operation,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "0";
        return {
          displayContent: Number(updatedDisplay),
          cumContent: state.cumContent,
          operation : state.operation,
        };
      }
    default:
      return state;
  }
}

const store = createStore(contentReducer);

export default store;
