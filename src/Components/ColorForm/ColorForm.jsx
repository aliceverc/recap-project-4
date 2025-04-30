import { useState } from "react";
import { ColorInput } from "../ColorInput/ColorInput";
import { ContrastText } from "../ContrastText/ContrastText";
import { nanoid } from "nanoid";

// ColorForm.jsx
// A controlled form that collects role, hex and contrastText for a new theme colour
export function ColorForm({ onAddColor }) {
  // use the useState hook to call an object with default values 'role', 'hex' and 'contrastText'
  // assign the 'role' value inside the <input> tag of the 'role' text-field > {formValues.role}
  const [formValues, setFormValues] = useState({
    role: "primary main",
    hex: "#000000",
    contrastText: "#FFFFFF",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // stop full-page reload

    // build the new color object
    const newColor = {
      ...formValues, // role, hex, contrastText
      id: nanoid(), // atatch a unique id
    };
    console.log(newColor);

    // tell the parent component
    onAddColor(newColor);

    // clear the form for the next entry
    setFormValues({
      role: "primary main",
      hex: "#000000",
      contrastText: "#FFFFFF",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* whole form submits via handleSubmit > the Add button just triggers this */}
        {/* return fields to sensible defaults so the user can add another coour quickly */}
        <h2>Add color</h2>
        <label htmlFor="role-input">
          Role:
          <input
            id="role-input"
            type="text"
            name="role"
            value={formValues.role}
            // copy-and-replace pattern: rebuild the whole object, changing only the field that just changed
            onChange={(event) => {
              const latestText = event.target.value;
              const updatedState = {
                ...formValues,
                role: latestText,
              };
              setFormValues(updatedState);
            }}
          ></input>
          <label>
            Hex:
            {/* pass the current hex from state; when child reports a change, copy existing state and overwrite hex only */}
            <ColorInput
              value={formValues.hex}
              onChange={(newHex) =>
                setFormValues({
                  ...formValues,
                  hex: newHex,
                })
              }
            />
          </label>
        </label>
        <label>
          Contrast text:
          {/* pass the current hex from state; when child reports a change, copy existing state and overwrite hex only */}
          <ContrastText
            value={formValues.contrastText}
            onChange={(newContrast) =>
              setFormValues({
                ...formValues,
                contrastText: newContrast,
              })
            }
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
