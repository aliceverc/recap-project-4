export function ColorInput({ value, onChange }) {
  // value > current hex string; onChange > callback that receives the new hex string

  // a pair of inputs (pciker + text) that always show the same hex value and report changes upward
  return (
    <div>
      <label>
        {/* two inputs share the same 'value' so they stay in sync */}
        <input
          className="input_field_hex"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>
        <input
          className="input_field"
          type="color"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          } /* forward just event.target.value (the hex) from the parent */
        ></input>
      </label>
    </div>
  );
}
