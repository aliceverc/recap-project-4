export function ContrastText({ value, onChange, placeholder }) {
  return (
    <div>
      <label>
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
          onChange={(event) => onChange(event.target.value)}
        ></input>
      </label>
    </div>
  );
}
