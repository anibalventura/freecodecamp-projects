import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  hanldeStartStop,
  hanldeReset,
  startStopLabel,
  timeLeft,
  timerLabel,
}) => {
  //Format the time with moment.js package
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {
    trim: false,
  });
  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
      <p className="text-white text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="text-white text-4xl font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <div className="grid grid-flow-col gap-2">
        <button
          className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg"
          id="start_stop"
          onClick={hanldeStartStop}
        >
          {startStopLabel}
        </button>
        <button
          className="border-2 text-white rounded-lg border-white border-slod px-4 py-2"
          id="reset"
          onClick={hanldeReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimeLeft;
