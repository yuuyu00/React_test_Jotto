import React from "react";
import { connect } from "react-redux";

import { correctGuess } from "../actions";

const Input = props => {
  const renderContents = success => {
    if (success) return null;

    return (
      <form className="form-inline">
        <input type="text" id="word_guess" placeholder="enter guess" />
        <button>Submit</button>
      </form>
    );
  };

  return <div>{renderContents(props.success)}</div>;
};

const mapStateToProps = state => {
  return {
    success: state.success
  };
};

export default connect(
  mapStateToProps,
  {
    correctGuess
  }
)(Input);
