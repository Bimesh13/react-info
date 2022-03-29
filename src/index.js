import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import MainContent from "./MainComponent";
import Footer from "./Footer";

function CustomPage() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));
