import React from "react";
import { render } from "react-dom";
import styles from "../App.css";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

export default function App() {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adop me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById("root"));
