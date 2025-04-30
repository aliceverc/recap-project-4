import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { useState } from "react";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  // call a useState hook and define 'initialColors' as the initial value
  // set 'colors' as current state and 'setColors' as set function inside the variable
  const [colors, setColors] = useState(initialColors);

  // callback passed to 'ColorForm' > prepends the new color so the newest entry shows first
  function handleAddColor(newColor) {
    // immutable update: create a brand-new array [newColor, ...colors]
    setColors([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      {/* pass down the add-callback so the form can hand new colors up */}
      <ColorForm onAddColor={handleAddColor} />

      {/* swap 'initialColors.map' for 'colors.map' so the UI always reflects the latest state */}
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
