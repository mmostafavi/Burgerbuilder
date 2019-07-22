import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import burger from "./store/reducers/burger";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootReducer = combineReducers({
  burger: burger
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>{app}</Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
