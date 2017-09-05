import React from "react";
import PropTypes from "prop-types";

import * as util from "../util";
import * as copy from "./../copy";

import { ActivityList, Group } from "./index";

const ActivityPage = ({actions, receipts}) => (
  <main className="col-md-12" >
    <h6 className="underlined"> Activity </h6>
    <h5> Activity </h5>
    <p> {copy.activity} </p>
    <Group withFn={util.sameDay} list={receipts} Component={ActivityList} props={{actions}} />
  </main>
);

ActivityPage.PropTypes = {
  receipts: PropTypes.Array
};

ActivityPage.defaultProps = {
  receipts: []
};

export default ActivityPage;
