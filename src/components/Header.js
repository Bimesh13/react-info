import React from "react";
import myImage from "../images/react-logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-bar">
          <img src={myImage} width="60px" />
          <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
