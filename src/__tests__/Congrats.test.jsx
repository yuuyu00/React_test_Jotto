import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "../components/Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Congrats success={true} />);
});

it("正常にレンダリングされる", () => {
  expect(wrapper).toBeTruthy();
});

it("`success` propsがfalseならテキストを表示しない", () => {
  const not_success_wrapper = shallow(<Congrats success={false} />);
  expect(not_success_wrapper.find("#message_congrats")).toHaveLength(0);
});

it("`success` propsがtrueなら空でないテキストを表示する", () => {
  const not_success_wrapper = shallow(<Congrats success={true} />);
  expect(not_success_wrapper.find("#message_congrats")).toHaveLength(1);
  expect(not_success_wrapper.find("#message_congrats").text()).toBe(
    "Congraturations! You guessed the word!"
  );
});
