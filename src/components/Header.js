import React from "react";
import myImage from "../images/react-logo.png";

export default function Header() {
  return (
    <nav className="nav-bar">
      <img src={myImage} className="react-logo" />
      <h1>ReactFacts</h1>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}
