import React from "react";

import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";

function App() {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  return (
    <div className="ui container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
