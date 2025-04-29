import { useState } from "react";

export function ColorForm() {
  // use the useState hook to call an object with default vcalues 'role', 'hex' and 'contrastText'
  // assign the 'role' value inside the <imput> tag of the 'role' text-field > {formValues.role} and
  const [formValues, setFormValues] = useState({
    role: "primary main",
    hex: "#000000",
    contrastText: "#FFFFFF",
  });

  return (
    <>
      <form>
        <h2>Add color</h2>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formValues.role}
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
        </label>
      </form>
    </>
  );
}
