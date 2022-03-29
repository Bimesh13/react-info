import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Header() {
  return (
    <nav className="nav-bar">
      <img src={reactLogo} className="react-logo" />
      <h1>ReactFacts</h1>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}
