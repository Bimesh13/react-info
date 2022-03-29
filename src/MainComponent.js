import React from "react";

export default function MainContent() {
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
