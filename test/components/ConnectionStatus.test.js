import React from "react";
import ConnectionStatus from "../../src/components/ConnectionStatus";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  expect(renderer.create(
    <ConnectionStatus connected={false} />
  ).toJSON()).toMatchSnapshot();
});
