import { createStore } from "redux";

const operations = Object.freeze({
  add: 0,
  subtract: 1,
  multiply: 2,
  divide: 3,
  toggle: 4,
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
        cumContent: state.cumContent + state.displayContent,
        operation: operations.add,
        operationVisible: operations.add,
      };
    case "action/subtract":
      return {
        cumContent: state.cumContent - state.displayContent,
        operation: operations.subtract,
        operationVisible: operations.subtract,
      };
    case "action/multiply":
      return {
        cumContent: state.cumContent * state.displayContent,
        operation: operations.multiply,
        operationVisible: operations.multiply,
      };
    case "action/divide":
      return {
        cumContent: state.cumContent / state.displayContent,
        operation: operations.divide,
        operationVisible: operations.divide,
      };
    case "action/clear":
      return {
        cumContent: 0,
        displayContent: 0,
        operation: null,
      };
    case "action/toggle":
      return {
        cumContent: state.cumContent * -1,
        displayContent: state.displayContent * -1,
      };
    case "content/1":
      if (state.operationVisible) {
        return {
          displayContent: 1,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "1";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/2":
      if (state.operationVisible) {
        return {
          displayContent: 2,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "2";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/3":
      if (state.operationVisible) {
        return {
          displayContent: 3,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "3";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/4":
      if (state.operationVisible) {
        return {
          displayContent: 4,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "4";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/5":
      if (state.operationVisible) {
        return {
          displayContent: 5,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "5";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/6":
      if (state.operationVisible) {
        return {
          displayContent: 6,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "6";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/7":
      if (state.operationVisible) {
        return {
          displayContent: 7,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "7";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/8":
      if (state.operationVisible) {
        return {
          displayContent: 8,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "8";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    case "content/9":
      if (state.operationVisible) {
        return {
          displayContent: 9,
          operationVisible: null,
        };
      } else {
        let updatedDisplay = state.displayContent + "9";
        return {
          displayContent: Number(updatedDisplay),
        };
      }
    default:
      return state;
  }
}

const store = createStore(contentReducer);

export default store;
