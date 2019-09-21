import React from "react";
import { render } from "react-dom";
import styles from "../App.css";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

export default function App() {
  return (
    <div>
      <h1 id="something-important">Adop me!</h1>
      <SearchParams />
    </div>
  );
}

render(<App />, document.getElementById("root"));
