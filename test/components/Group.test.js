import React from "react";
import toJson from "enzyme-to-json";

import { render } from "enzyme";

import Group from "../../src/components/Group";

const Component = ({groupIndex, group}) => (
  <div key={groupIndex} className="group"> {
    group.map((group, index) => <div key={groupIndex + index} className="item" />)
  } </div>
)

describe("Group", () => {
  let wrapper;

  beforeEach(() => {
    const withFn = (a, b) => a == b;
    const list = [0, 0, 1, 1, 1, 2, 2]
    wrapper = render(<Group Component={Component} withFn={withFn} list={list} />);
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders groups correctly", () => {
    expect(wrapper.find(".group").length).toBe(3);
  })

  it("renders sub groups correctly", () => {
    expect(wrapper.find(".item").length).toBe(7);
  })
});
