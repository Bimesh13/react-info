import React from "react";
import ReactDOM from "react-dom";
import myImage from "./react-logo.png";

function CustomPage() {
  return (
    <>
      <h1>Reasons for liking React:</h1>
      <ul>
        <li>Composable</li>
        <li>Declarative</li>
        <li>Managed by facebook</li>
      </ul>
    </>
  );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));
