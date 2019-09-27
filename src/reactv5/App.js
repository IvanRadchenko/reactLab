import React, { useState } from "react";
import { render } from "react-dom";
import styles from "../App.css";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "./store";
// import ThemeContext from "./ThemeContext";

export default function App() {
  // const themeHook = useState("darkblue"); //Deleting for Redux implementation
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider value={themeHook}> //We delete theme context 
      provider to replace it with the Redux Store */}
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adop me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
        {/* </ThemeContext.Provider> */}
      </Provider>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById("root"));
