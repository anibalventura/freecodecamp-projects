import React from "react";
import Button from "./button";

const QuoteMachine = (props) => {
  return (
    <React.Fragment>
      {props.selectedQuote
        ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}`
        : ""}
      <Button handleClick={props.handleNextQuote} />
    </React.Fragment>
  );
};

export default QuoteMachine;
