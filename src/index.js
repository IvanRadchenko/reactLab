import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./reactv5/App";
// import App from "./reactv4/App.js";
// import App from "./freeCodeCamp/App";
// import App from "./intermediateReactv2/App";
import * as serviceWorker from "./serviceWorker";

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
