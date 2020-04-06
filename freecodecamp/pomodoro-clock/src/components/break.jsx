import React from "react";
import { useState } from "react";
import moment from "moment";

const Break = () => {
  const [breakLength, setBreakLength] = useState(300);

  //Decrease the value of setBreakLength by 1 minute = 60 secs
  const decrementBreakLenght = () => {
    const newBreakLenght = breakLength - 60;
    if (newBreakLenght < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLenght);
    }
  };

  //Increment the value of setBreakLength by 1 minute = 60 secs
  const incrementBreakLenght = () => {
    setBreakLength(breakLength + 60);
  };

  //Use the Moment.js to break the lenght in minutes
  const breakLengthMinutes = moment.duration(breakLength, "s").minutes();

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
