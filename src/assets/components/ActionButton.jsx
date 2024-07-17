import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "../store";

const labelMapper = {
    '=': 'result',
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    '%': 'percent',
    'C': 'clear',
    'T': 'toggle',
    '.': 'dot'
}

const operations = {
    add: 0,
    subtract: 1,
    multiply: 2,
    divide: 3,
    percent: 4,
    toggle: 5, 
    clear: 6,
    dot: 7,
    result: 8
};

export default function ActionButton({ label, className }) {
  const dispatch = useDispatch();
  const operationVisible = useSelector(state => state.operationVisible)

  function actionHandler() {
    let actionFn = null;
    switch (label) {
      case "=":
        actionFn = contentActions.result;
        break;
      case "+":
        actionFn = contentActions.addAction;
        break;
      case "-":
        actionFn = contentActions.subAction;
        break;
      case "*":
        actionFn = contentActions.multiplyAction;
        break;
      case "/":
        actionFn = contentActions.divideAction;
        break;
      case "%":
        actionFn = contentActions.percentAction;
        break;
      case "C":
        actionFn = contentActions.clearAction;
        break;
      case "T":
        actionFn = contentActions.toggleAction;
        break;
      default:
        break;
    }
    dispatch(actionFn())
  }
  return (
    <button
      onClick={actionHandler}
      className={`flex justify-center items-center h-16 text-2xl text-white rounded-full ${className}  ${operationVisible === operations[labelMapper[label]] && labelMapper[label] !== null ? 'bg-green-400' : ''}`}
    >
      {label}
    </button>
  );
}
