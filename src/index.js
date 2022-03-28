import React from "react";
import ReactDOM from "react-dom";
import myImage from "./react-logo.png";

function HeaderElement() {
  return (
    <header>
      <nav>
        <img src={myImage} width="100px" />
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function ReasonElement() {
  return (
    <>
      <h1>Reason for liking react.</h1>
      <ul>
        <li>Composable</li>
        <li>Declarative</li>
        <li>Managed by facebook</li>
      </ul>
    </>
  );
}

function FooterElement() {
  return (
    <footer>
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
