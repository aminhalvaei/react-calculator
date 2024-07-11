export default function NumberButton({ label, className }) {
  return (
    <button
      className={`flex justify-center items-center h-16 text-2xl text-white bg-gray-700 rounded-full ${className}`}
    >
      {label}
    </button>
  );
}
