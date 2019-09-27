import React from "react";
import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Wrapper from "./MountedCounter";
import Reducer from "./Reducer";
const App = () => {
  return (
    <div>
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Wrapper />
      <hr />
      <Reducer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
export default App;
