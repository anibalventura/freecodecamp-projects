import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  hanldeStartStop,
  startStopLabel,
  timeLeft,
  timerLabel,
}) => {
  //Format the time with moment.js package
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {
    trim: false,
  });
  return (
    <React.Fragment>
      <div>
        {formattedTimeLeft}
        <p id="timer-label">{timerLabel}</p>
        <p id="timer-left">{formattedTimeLeft}</p>
        <button id="start_stop" onClick={hanldeStartStop}>{startStopLabel}</button>
      </div>
    </React.Fragment>
  );
};

export default TimeLeft;
