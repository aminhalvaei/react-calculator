import { useDispatch } from "react-redux";

export default function NumberButton({ label, className }) {
  const dispatch = useDispatch();

  function numberHandler() {
    dispatch({ type: "content/" + label });
  }

  return (
    <button
      onClick={numberHandler}
      className={`flex justify-center items-center h-16 text-2xl text-white bg-gray-700 rounded-full ${className}`}
    >
      {label}
    </button>
  );
}
