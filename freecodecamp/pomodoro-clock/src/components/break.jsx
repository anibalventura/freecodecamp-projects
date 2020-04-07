import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButtonContainer,
  PlusMinusButton,
} from "../ui/breakSessionUi.jsx";

const Break = ({ breakLength, incrementBreakLenght, decrementBreakLenght }) => {
  //Use the Moment.js to break the lenght in minutes
  const breakLengthMinutes = moment.duration(breakLength, "s").asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="break-label">Break Length</BreakSessionLabel>
      <BreakSessionTime id="break-length">
        {breakLengthMinutes}
      </BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton id="break-decrement" onClick={decrementBreakLenght}>
          -
        </PlusMinusButton>
        <PlusMinusButton id="break-increment" onClick={incrementBreakLenght}>
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

export default Break;
