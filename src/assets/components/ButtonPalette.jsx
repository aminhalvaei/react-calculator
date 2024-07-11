import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

export default function ButtonPalette() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <ActionButton label="C" className="bg-green-600"></ActionButton>
      <ActionButton label="T"></ActionButton>
      <ActionButton label="%"></ActionButton>
      <ActionButton label="/"></ActionButton>
      <NumberButton label="7"></NumberButton>
      <NumberButton label="8"></NumberButton>
      <NumberButton label="9"></NumberButton>
      <ActionButton label="*"></ActionButton>
      <NumberButton label="4"></NumberButton>
      <NumberButton label="5" ></NumberButton>
      <NumberButton label="6"></NumberButton>
      <ActionButton label="-"></ActionButton>
      <NumberButton label="1"></NumberButton>
      <NumberButton label="2"></NumberButton>
      <NumberButton label="3"></NumberButton>
      <ActionButton label="+"></ActionButton>
      <NumberButton label="0" className="col-span-2"></NumberButton>
      <ActionButton label="."></ActionButton>
      <ActionButton label="="></ActionButton>
    </div>
  );
}
