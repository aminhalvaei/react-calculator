import Display from "./assets/components/Display";
import ButtonPalette from "./assets/components/ButtonPalette";
import "./App.css";

function App() {
  return (
    <div className="w-80 h-fit p-4 bg-black rounded-lg">
      <Display></Display>
      <ButtonPalette></ButtonPalette>
    </div>
  );
}

export default App;
