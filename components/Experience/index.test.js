import React from "react";
import renderer from "react-test-renderer";
import data from "../../config.json";
import Exp from "./";

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(<Exp header="Experience" data={data.exp} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
