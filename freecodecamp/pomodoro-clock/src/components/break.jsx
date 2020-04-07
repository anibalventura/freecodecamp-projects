import React from "react";
import moment from "moment";

const Break = ({ breakLength, incrementBreakLenght, decrementBreakLenght }) => {
  //Use the Moment.js to break the lenght in minutes
  const breakLengthMinutes = moment.duration(breakLength, "s").asMinutes();

  return (
    <React.Fragment>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthMinutes}</p>
      <button id="break-decrement" onClick={decrementBreakLenght}>
        -
      </button>
      <button id="break-increment" onClick={incrementBreakLenght}>
        +
      </button>
    </React.Fragment>
  );
};

export default Break;
