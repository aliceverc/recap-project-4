import { ColorForm } from "../ColorForm/ColorForm";
import "./Color.css";
import { useState } from "react";

// a single color card: shows color info, plus Delete or Edit flows
export default function Color({ color, onDelete, onSave }) {
  // confirmation state for the Delete flow
  const [isConfirming, setIsConfirming] = useState(false);
  // edit state for swapping into the inline edit form
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        // form inside the Edit mode: prefilled with default values and wired to save or cancel
        <ColorForm
          initialRole={color.role}
          initialHex={color.hex}
          initialContrastText={color.contrastText}
          onSave={(updated) => onSave({ ...updated, id: color.id })}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          {/* normal Display moda */}
          <h3 className="color-card-headline">{color.hex}</h3>
          <h3>{color.role}</h3>
          <p>contrast: {color.contrastText}</p>

          {/* enter Edit mode */}
          <button
            className="update_buttons edit"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>

          {/* Confirmation flow */}
          {isConfirming ? (
            <>
              <h4 className="color-card-highlight">
                Are you sure you want to delete this color?
              </h4>
              {/* Yes: call the parent’s delete handler with our id */}
              <button onClick={() => onDelete(color.id)}>Yes</button>{" "}
              {/* No: cancel and hide the prompt */}
              <button onClick={() => setIsConfirming(false)}>No</button>{" "}
            </>
          ) : (
            // Initial state: show a Delete button that enters confirm mode
            <button
              className="update_buttons delete"
              onClick={() => setIsConfirming(true)}
            >
              Delete
            </button>
          )}
        </>
      )}
    </div>
  );
}
