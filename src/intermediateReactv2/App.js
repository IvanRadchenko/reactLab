import React from "react";
import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";

const App = () => {
  return (
    <div>
      <State />
      <hr />
      <Effect />
      <h1 />
    </div>
  );
};

render(<App />, document.getElementById("root"));
export default App;
