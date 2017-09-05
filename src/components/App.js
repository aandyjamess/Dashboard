import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { TopBar, SideBar, Modal, ActivityPage  } from "./index";

const App = ({actions, user: {connected}, modal, data: {receipts}}) => (
  <BrowserRouter>
    <div className="app">
      <Modal actions={actions} active={modal} receipt={receipts[modal]}/>
      <TopBar connected={connected}/>
      <Route path="/:route" component={SideBar}/>
      <div className="app-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Route
              path="/activity"
              component={() => <ActivityPage actions={actions} receipts={receipts} />}
            />
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

App.PropTypes = {
  modal: PropTypes.number,
  activities: PropTypes.object
};

App.DefaultProps = {
  modal: false
};

export default App;
