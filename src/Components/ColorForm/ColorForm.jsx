import { useState } from "react";
import { ColorInput } from "../ColorInput/ColorInput";
import { ContrastText } from "../ContrastText/ContrastText";

// ColorForm.jsx
// A controlled form that collects role, hex and contrastText for a new theme colour
export function ColorForm() {
  // use the useState hook to call an object with default values 'role', 'hex' and 'contrastText'
  // assign the 'role' value inside the <input> tag of the 'role' text-field > {formValues.role}
  const [formValues, setFormValues] = useState({
    role: "primary main",
    hex: "#000000",
    contrastText: "#FFFFFF",
  });

  return (
    <>
      <form>
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
              console.log(formValues);
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
      </form>
    </>
  );
}
