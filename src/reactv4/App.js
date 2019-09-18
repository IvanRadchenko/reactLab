import React from "react";
import { render } from "react-dom";
<<<<<<< HEAD
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Adopt me</h1>
        </Link>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
=======
import "../App.css";
import Pet from "./Pet.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cock" />
        <Pet name="Doink" animal="cat" breed="Mix" />
>>>>>>> Add App for Pet App in reactv4
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
