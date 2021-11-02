// import "./index.css"; //this doesn't seem to work as expected and solution doesn't do it
import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById("app")
);
