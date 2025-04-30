export function ColorInput({ value, onChange }) {
  // value > current hex string; onChange > callback that receives the new hex string

  // a pair of inputs (pciker + text) that always show the same hex value and report changes upward
  return (
    <div>
      <label>
        {/* two inputs share the same 'value' so they stay in sync */}
        <input
          type="color"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          } /* forward just event.target.value (the hex) from the parent */
        ></input>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>
      </label>
    </div>
  );
}
