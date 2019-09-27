import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,

  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f //gives some bogus function if no redux dev tools exist
); //hook reducer in new version of React

export default store;
