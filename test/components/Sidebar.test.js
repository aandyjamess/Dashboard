import React from "react";
import toJson from "enzyme-to-json";

import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "../../src/components/Sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const match = {params: {route: "activity"}};

    const wrapper = shallow(
      <BrowserRouter>
        <Sidebar match={match} />
      </BrowserRouter>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
