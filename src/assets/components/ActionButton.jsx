import { useDispatch } from "react-redux";

const labelMapper = {
    '=': 'result',
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    'C': 'clear',
    'T': 'toggle',
}

export default function ActionButton({ label, className }) {
  const dispatch = useDispatch();

  function actionHandler() {
    dispatch({ type: "action/" + labelMapper[label] });
  }
  return (
    <button
      onClick={actionHandler}
      className={`flex justify-center items-center h-16 text-2xl text-white rounded-full ${className}`}
    >
      {label}
    </button>
  );
}
