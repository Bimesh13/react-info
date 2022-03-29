import React from "react";
import Info from "./soloProject/Info";
import About from "./soloProject/About";
import Interest from "./soloProject/Interest";
import Footer from "./soloProject/Footer";

export default function SoloProject() {
  return (
    <div className="business-card-background">
      <h1 className="title-project">Solo Project 1</h1>
      <div className="business-card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
