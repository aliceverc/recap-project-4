export function ContrastText({ value, onChange }) {
  return (
    <div>
      <label>
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
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
