import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDelete }) {
  const [isConfirming, setIsConfirming] = useState(false);
  console.log(isConfirming);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* Confirmation prompt */}
      {isConfirming ? (
        <>
          <h4>Are you sure you want to delete this color?</h4>
          {/* Yes: call the parent’s delete handler with our id */}
          <button onClick={() => onDelete(color.id)}>Yes</button>{" "}
          {/* No: cancel and hide the prompt */}
          <button onClick={() => setIsConfirming(false)}>No</button>{" "}
        </>
      ) : (
        // Initial state: show a Delete button that enters confirm mode
        <button onClick={() => setIsConfirming(true)}>Delete</button>
      )}
    </div>
  );
}
