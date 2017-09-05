import React from "react";
import classnames from "classnames";

import { Link } from "react-router-dom";

import * as routes from "./../routes";

export default ({match: {params: {route}}}) => (
  <nav className="sidebar">
    {Object.keys(routes).map(r => (
      <Link to={r}>
        <span className={classnames("sidebar-link", {"active": route === r})}>
          <span className="sidebar-link-item icon icon-activity" />
          <span className="sidebar-link-item text-capitalize"> {r} </span>
        </span>
      </Link>
     ))}
  </nav>
);
