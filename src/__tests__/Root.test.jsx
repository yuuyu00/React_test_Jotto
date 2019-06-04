import React from "react";
import { shallow } from "enzyme";

import Root from "../Root";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Root />);
});

it("正常にレンダリングされること", () => {
  expect(wrapper).toBeTruthy();
});
