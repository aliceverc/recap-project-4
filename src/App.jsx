import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { useState } from "react";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import "./App.css";
import "./global.css";

function App() {
  // call a useState hook and define 'initialColors' as the initial value
  // set 'colors' as current state and 'setColors' as set function inside the variable
  const [colors, setColors] = useState(initialColors);

  // callback passed to 'ColorForm' > prepends the new color so the newest entry shows first
  function handleAddColor(newColor) {
    // immutable update: create a brand-new array [newColor, ...colors]
    setColors([newColor, ...colors]);
  }

  // removes the color card whose id matches the argument
  // filters out that item and updates the state array
  function handleDeleteColor(id) {
    setColors(
      colors.filter((color) => {
        return color.id !== id;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>

      {/* pass the add-color callback into the form */}
      <ColorForm onAddColor={handleAddColor} />

      {/* - render one color card per object in state
          - pass the delete callback so each card can remove itself */}
      {colors.map((color) => {
        return (
          <Color key={color.id} color={color} onDelete={handleDeleteColor} />
        );
      })}
    </>
  );
}

export default App;
