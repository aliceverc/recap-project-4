export function ContrastText({ value, onChange }) {
  return (
    <div>
      <label>
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
          onChange={(event) => onChange(event.target.value)}
        ></input>
      </label>
    </div>
  );
}
