import React from "react";
import ReactDOM from "react-dom";
import Bacon from "baconjs";

import Actions from "./actions";
import * as reducers from "./reducers";

import App from "./components/App";
import data from "../data";
import mock from "./mock-data";

import "../styles/Main.scss";

const bus = new Bacon.Bus();

const actions = Actions(bus);

bus.scan(data, (state, [eventName, payload]) => {
  try {
    return reducers[eventName](state, payload);
  } catch(e) {
    console.warning("Running reducer on event:", eventName, "resulted in an error:", e);
  }
}).onValue(state => ReactDOM.render(<App actions={actions} {...state} />, document.getElementById("root")));

actions.loadData(mock);
