import React from "react";
import { render } from "react-dom";
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
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
