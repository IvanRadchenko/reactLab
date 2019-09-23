import React from "react";
import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";

const App = () => {
  return (
    <div>
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
    </div>
  );
};

render(<App />, document.getElementById("root"));
export default App;
