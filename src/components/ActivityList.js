import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import * as copy from "./../copy";

const ActivityList = ({actions, groupIndex, group}) => (
  <div className="activity panel">
    <div className="activity-heading panel-heading" />
    {group.map(({transaction}, index) => (
      <div
        key={groupIndex + index}
        className="activity-item clearfix"
        onClick={actions.openModal(groupIndex + index)}
      >
        <div className="activity-check pull-left">
          <icon className="icon icon-activity_tick" />
        </div>
        <div className="activity-avatar icon pull-left icon-user_selfie_ph" />
        <div className="activity-date pull-right">
          {moment(transaction["unix-timestamp"] * 1000).format(copy.dateFormat.activity)}
        </div>
      </div>)
    )}
  </div>
);

ActivityList.PropTypes = {
  groupIndex: PropTypes.number,
  group: PropTypes.array,
};

ActivityList.defaultProps = {
  groupIndex: 0,
  group: []
};

export default ActivityList;
