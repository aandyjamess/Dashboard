import React from "react";
import toJson from "enzyme-to-json";

import { shallow } from "enzyme";

import ActivityPage from "../../src/components/ActivityPage";

describe("ActivityPage", () => {
  it("renders correctly", () => {
    expect(toJson(shallow(<ActivityPage />))).toMatchSnapshot();
  });
});

