import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButtonContainer,
  PlusMinusButton,
} from "../ui/breakSessionUi.jsx";

const Session = ({
  sessionLength,
  incrementSessionLenght,
  decrementSessionLenght,
}) => {
  //Use the Moment.js to put sessionLegth in minutes
  const sessionLengthMinutes = moment.duration(sessionLength, "s").asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="session-label">Session Length</BreakSessionLabel>
      <BreakSessionTime id="session-length">
        {sessionLengthMinutes}
      </BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton
          id="session-decrement"
          onClick={decrementSessionLenght}
        >
          -
        </PlusMinusButton>
        <PlusMinusButton
          id="session-increment"
          onClick={incrementSessionLenght}
        >
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

export default Session;
