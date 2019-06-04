import React from "react";
import { shallow } from "enzyme";
import App from "../App";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it("正常にレンダリングされること", () => {
  expect(wrapper).toBeTruthy();
});
