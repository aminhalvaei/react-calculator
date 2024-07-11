export default function ActionButton({ label, className }) {
  return (
    <button
      className={`flex justify-center items-center h-16 text-2xl text-white rounded-full ${className}`}
    >
      {label}
    </button>
  );
}
