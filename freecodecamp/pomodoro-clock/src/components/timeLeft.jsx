import React, { useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { useEffect } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({ breakLength, sessionLength }) => {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //Session or break
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  //Use useEffect react hook function to change the time left
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const isStarted = intervalId != null;
  const hanldeStartStop = () => {
    if (isStarted) {
      //If we are in started mode:
      //stop the timer
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      //If we are in stopped mode:
      //decrement timeLeft every one second (1000 ms)
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }

          //If session:
          if (currentSessionType === "Session") {
            //Switch to break
            setCurrentSessionType("Break");
            //setTimeLeft to breakLength
            setTimeLeft(breakLength);
          }

          //If break:
          else if (currentSessionType === "Break") {
            //Switch to session
            setCurrentSessionType("Session");
            //setTimeLeft to sessionLength
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  //Format the time with moment.js package
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <React.Fragment>
      <div>
        {formattedTimeLeft}
        <p id="timer-label">{currentSessionType}</p>
        <button onClick={hanldeStartStop}>
          {isStarted ? "Stop" : "Start"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default TimeLeft;
