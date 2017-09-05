import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Topbar from "../../src/components/Topbar";

describe("Topbar", () => {
  it("renders correctly", () => {
    expect(toJson(shallow(<Topbar connected={false} />))).toMatchSnapshot();
  });
});
