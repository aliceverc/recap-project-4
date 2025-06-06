import "./ColorInput.css"

export function ColorInput({ value, onChange, placeholder }) {
  // value > current hex string; onChange > callback that receives the new hex string

  // a pair of inputs (pciker + text) that always show the same hex value and report changes upward
  return (
    <div>
      <label>
        {/* two inputs share the same 'value' so they stay in sync */}
        <input
          placeholder={placeholder}
          className="input_text_hex"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          pattern="^#[0-9A-Fa-f]{6}$"
          title="Enter a valid 6-digit hex code, e.g. #a1b2c3"
          required
        ></input>
        <input
          className="input_field_hex"
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
