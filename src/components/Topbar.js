import React from "react";
import PropTypes from "prop-types";

import ConnectionStatus from "./ConnectionStatus";

const Topbar = ({connected}) => (
  <nav className="topbar navbar">
    <span className="icon icon-logo" />
    <ConnectionStatus connected={connected} />
    <span className="topbar-avatar icon icon-user_selfie_ph" />
  </nav>
);

Topbar.PropTypes = {
  connected: PropTypes.bool
};

Topbar.defaultProps = {
  connected: false
};

export default Topbar;
