import React from "react";
import "./Button.css";
export default function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={`button button_${type}`}>
      {text}
    </button>
  );
}
