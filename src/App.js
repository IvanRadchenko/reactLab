import React from "react";
import { render } from "react-dom";
import "./App.css";
import Counter from "./Counter";
import Toogler from "./Toogler";
import ControlledInput from "./ControlledInput";
import ControlledForm from "./ControlledForm";
import LifeCycle from "./LifeCycle";

const App = () => {
  return (
    <div className="main-container">
      <h1 id="something-important">Examples</h1>
      <Counter title="Counter test" />
      <Toogler />
      <ControlledInput />
      <ControlledForm />
      <LifeCycle />
    </div>
  );
};

render(<App />, document.getElementById("root"));

export default App;
