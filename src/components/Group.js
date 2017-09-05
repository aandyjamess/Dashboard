import React from "react";
import PropTypes from "prop-types";

import { groupWith } from "ramda";

const Group = ({Component, withFn, list, props}) => (
  <div> {groupWith(withFn, list).map((group, index) => (
    <Component key={index} groupIndex={index} group={group} {...props} />)
  )} </div>
);

Group.PropTypes = {
  withFn: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  props: PropTypes.object
};

export default Group;
