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

      {/* when clicked, call the parent's delete handler with our card's id */}
      <button onClick={() => setIsConfirming(true)}>Delete</button>
    </div>
  );
}
