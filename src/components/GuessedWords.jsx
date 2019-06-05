import React from "react";

export default props => {
  const getLetterMatchCount = (guessedWord, secredword) => {};

  const renderContents = () => {
    if (props.guessedWords.length === 0) {
      return (
        <div id="component_guessed_word">
          <div id="guess_instruction">Try to guess the secret word!</div>
        </div>
      );
    } else {
      return (
        <div id="guessed_words">
          <h3>Guessed Words</h3>
          <table className="ui table">
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, idx) => (
                <tr className="guessed-word" key={`row_${idx}`}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };
  return <>{renderContents()}</>;
};
