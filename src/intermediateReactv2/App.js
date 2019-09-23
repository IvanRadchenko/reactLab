import React from "react";
import { render } from "react-dom";
import State from "./State";

const App = () => {
  return (
    <div>
      <State />
      <hr />
    </div>
  );
};

render(<App />, document.getElementById("root"));
export default App;
