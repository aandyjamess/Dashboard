import React from "react";
import toJson from "enzyme-to-json";

import { shallow } from "enzyme";

import Modal from "../../src/components/Modal";

describe("Modal", () => {
  it("renders correctly", () => {
    const actions = {openModal: () => {}, closeModal: () => {}};
    const wrapper = shallow(<Modal actions={actions} active={false} receipt={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


