import React from "react";

export default ({ success }) => {
  if (success) {
    return (
      <div id="component_congrats" className="ui success message">
        <div id="message_congrats" className="header">
          Congraturations! You guessed the word!
        </div>
      </div>
    );
  } else {
    return <div id="component_congrats" />;
  }
};
