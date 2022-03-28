import React from "react";
import ReactDOM from "react-dom";
import myImage from "./react-logo.png";
import "./index.css";

function HeaderElement() {
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

function ReasonElement() {
  return (
    <section className="main-part">
      <div className="container">
        <h1 className="heading">Reason for liking react.</h1>
        <ul className="reasons">
          <li>Composable</li>
          <li>Declarative</li>
          <li>Managed by facebook</li>
        </ul>
      </div>
    </section>
  );
}

function FooterElement() {
  return (
    <footer className="footer">
      <p>© 2022 Shrestha development. All rights reserved.</p>
    </footer>
  );
}

function CustomPage() {
  return (
    <>
      <HeaderElement />
      <ReasonElement />
      <FooterElement />
    </>
  );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));
