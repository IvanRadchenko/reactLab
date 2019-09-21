import React from "react";
import { render } from "react-dom";
import styles from "../App.css";
import Pet from "./Pet";

export default function App() {
  return (
    <div>
      <h1 id="something-important">Adop me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havan" />
      <Pet name="Bibo" animal="Cat" breed="Lionido" />
      <Pet name="Doink" animal="Bird" breed="Barbero" />
    </div>
  );
}

render(<App />, document.getElementById("root"));
