import React from "react";
import { render } from "react-dom";
import "./App.css";
import Counter from "./Counter";
import Toogler from "./Toogler";
import ControlledInput from "./ControlledInput";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Examples</h1>
      <Counter title="Counter test" />
      <Toogler />
      <ControlledInput />
    </div>
  );
};

render(<App />, document.getElementById("root"));

export default App;
