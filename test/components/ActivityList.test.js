import React from "react";
import toJson from "enzyme-to-json";

import { shallow } from "enzyme";

import ActivityList from "../../src/components/ActivityList";

describe("ActivityList", () => {
  let mockFn, wrapper;

  beforeEach(() => {
    mockFn = jest.fn();
    const actions = {openModal: () => mockFn};
    const group = [{"transaction": {"unix-timestamp": 0}}];
    wrapper = shallow(<ActivityList actions={actions} group={group} />);
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders activities correctly", () => {
    expect(wrapper.find(".activity-item").length).toBe(1);
  })

  it("dispatches openModal event", () => {
    wrapper.find(".activity-item").simulate("click");

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
