import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ConnectionStatus = ({connected}) => (
  <span className={classnames("connection-status", {connected})}>
    <span className="connection-status-text pull-right">
      Connected
    </span>
    <span className="icon icon-connect-on pull-right" />
  </span>
);

ConnectionStatus.PropTypes = {
  connected: PropTypes.bool
};

ConnectionStatus.defaultProps = {
  connected: false
};

export default ConnectionStatus;
