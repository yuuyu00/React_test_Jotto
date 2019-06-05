import React from "react";
import { shallow } from "enzyme";
import { createStore } from "redux";

import Input from "../Input";

describe("レンダリング", () => {
  describe("ワードが推測されていない場合", () => {
    let wrapper;
    const store = createStore(() => ({ success: false }));

    beforeEach(() => {
      wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it("コンポーネントが正常にレンダリングされる", () => {
      expect(wrapper).toBeTruthy();
    });

    it("テキストボックスが正常にレンダリングされる", () => {
      expect(wrapper.find("#word_guess")).toHaveLength(1);
    });

    it("ボタンが正常にレンダリングされる", () => {
      expect(wrapper.find("button")).toHaveLength(1);
    });
  });

  describe("ワードが推測されている場合", () => {
    let wrapper;
    const store = createStore(() => ({ success: true }));

    beforeEach(() => {
      wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    });

    it("コンポーネントが正常にレンダリングされる", () => {
      expect(wrapper).toBeTruthy();
    });

    it("テキストボックスがレンダリングされない", () => {
      expect(wrapper.find("#word_guess")).toHaveLength(0);
    });

    it("ボタンがレンダリングされない", () => {
      expect(wrapper.find("button")).toHaveLength(0);
    });
  });

  describe("propsの確認", () => {
    let wrapper;
    const store = createStore(() => ({ success: true }));

    beforeEach(() => {
      wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    });

    it("props", () => {
      // const success = wrapper.instance().props.success;
      // expect(success).toBe(true);
      console.log(wrapper);
    });
  });
});
