import React from "react";

export default ({ success }) => {
  if (success) {
    return (
      <div id="component_congrats">
        <span id="message_congrats">
          Congraturations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div id="component_congrats" />;
  }
};
