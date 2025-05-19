import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import "./global.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  // call a useState hook and define 'initialColors' as the initial value
  // set 'colors' as current state and 'setColors' as set function inside the variable
  const [colors, setColors] = useLocalStorageState("theme-colors", {
    defaultValue: initialColors,
  });

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

  // replace the matching color with its updated version
  function handleEditColor(updatedColor) {
    setColors(
      colors.map((color) =>
        // if the ids match, swap in the edited object; otherwise leave untouched
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>🫟 Color Theme Creator 🫟</h1>

      <div className="intro"><p>Color Theme Creator is a simple tool for building and previewing custom color palettes.</p>
      <p>Add, edit, or remove colours on the fly and see their hex codes, roles, and contrast values in real time.
      Your theme is saved automatically, so you can close the tab and pick up right where you left off.</p></div>

      {/* unified form for adding colors: calls handleAddColor via onsave */}
      <ColorForm onSave={handleAddColor} />

      {/* If no colors remain, show a friendly prompt; otherwise render the palette */}
      {colors.length === 0 ? (
        <p>Your theme is empty. Add some colours to get started!</p>
      ) : (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDelete={handleDeleteColor}
              // pass the edit handler so each card can call back with its updated object
              onSave={handleEditColor}
            />
          );
        })
      )}
    </>
  );
}

export default App;
