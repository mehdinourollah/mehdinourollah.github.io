import React from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";

function App() {
  let msg = "%c Hi 👋! Welcome to my site!";
  let styles = [
    "font-size: 12px",
    "font-family: monospace",
    "background: white",
    "display: inline-block",
    "color: black",
    "padding: 8px 19px",
    "border: 1px dashed;",
  ].join(";");
  console.log(msg, styles);
  document.title = "Mehdi Nourollah";
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
