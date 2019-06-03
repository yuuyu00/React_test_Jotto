import React from "react";
import { shallow } from "enzyme";

import GuessedWords from "../GuessedWords";

const defaultProps = [
  {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
  }
];
let wrapper;

describe("推測ワードがある場合", () => {
  beforeEach(() => {
    const guessedWords = [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 },
      { guessedWord: "party", letterMatchCount: 5 }
    ];
    wrapper = shallow(<GuessedWords guessedWords={guessedWords} />);
  });

  it("正常にレンダリングされる", () => {
    expect(wrapper).toBeTruthy();
  });

  it("初期メッセージが表示されない", () => {
    expect(wrapper.find("#guess_instruction")).toHaveLength(0);
  });

  it("推測ワードが正常な数だけ表示される", () => {
    expect(wrapper.find(".guessed-word")).toHaveLength(3);
  });
});

describe("推測ワードがない場合", () => {
  beforeEach(() => {
    wrapper = shallow(<GuessedWords guessedWords={[]} />);
  });

  it("正常にレンダリングされる", () => {
    expect(wrapper).toBeTruthy();
  });

  it("初期メッセージが表示される", () => {
    expect(wrapper.find("#guess_instruction")).toHaveLength(1);
  });
});
