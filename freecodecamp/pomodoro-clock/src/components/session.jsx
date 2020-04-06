import React from "react";
import moment from "moment";

const Session = ({
  sessionLength,
  incrementSessionLenght,
  decrementSessionLenght,
}) => {
  //Use the Moment.js to Session the lenght in minutes
  const sessionLengthMinutes = moment.duration(sessionLength, "s").minutes();

  return (
    <React.Fragment>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthMinutes}</p>
      <button id="session-decrement" onClick={decrementSessionLenght}>
        -
      </button>
      <button id="session-increment" onClick={incrementSessionLenght}>
        +
      </button>
    </React.Fragment>
  );
};

export default Session;
