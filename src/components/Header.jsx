import React from "react";
import "./Header.css";
export default function Header({ title, leftChild, rightChild }) {
  return (
    <header className="Header">
      <div className="header_Left"> {leftChild}</div>
      <div className="header_Center">{title}</div>
      <div className="header_Right"> {rightChild}</div>
    </header>
  );
}
