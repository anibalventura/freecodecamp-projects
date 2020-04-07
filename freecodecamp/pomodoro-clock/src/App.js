import React, { useState, useEffect, useRef } from "react";
import './assets.css';
import Break from "./components/break";
import Session from "./components/session";
import TimeLeft from "./components/timeLeft";

const App = () => {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //Session or break
  const [intervalId, setIntervalId] = useState(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  //Use useEffect react hook function to change the time left
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  //Decrease the value of setBreakLength by 1 minute = 60 secs
  const decrementBreakLenght = () => {
    const newBreakLenght = breakLength - 60;
    if (newBreakLenght > 0) {
      setBreakLength(newBreakLenght);
    }
  };

  //Increment the value of setBreakLength by 1 minute = 60 secs
  const incrementBreakLenght = () => {
    const newBreakLenght = breakLength + 60;
    if (newBreakLenght <= 60 * 60) {
      setBreakLength(breakLength + 60);
    }
  };

  //Decrease the value of setSessionLength by 1 minute = 60 secs
  const decrementSessionLenght = () => {
    const newSessionLenght = sessionLength - 60;
    if (newSessionLenght > 0) {
      setSessionLength(newSessionLenght);
    }
  };

  //Increment the value of setSessionLength by 1 minute = 60 secs
  const incrementSessionLenght = () => {
    const newSessionLenght = sessionLength + 60;
    if (newSessionLenght <= 60 * 60) {
      setSessionLength(newSessionLenght);
    }
  };

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
            return newTimeLeft;
          }

          //Time left is less than zero
          //TODO: audioElement.current.play();
          //If session:
          if (currentSessionType === "Session") {
            //Switch to break
            setCurrentSessionType("Break");
            //setTimeLeft to breakLength
            return breakLength;
          }

          //If break:
          else if (currentSessionType === "Break") {
            //Switch to session
            setCurrentSessionType("Session");
            //setTimeLeft to sessionLength
            return sessionLength;
          }
        });
      }, 10);
      TODO: setIntervalId(newIntervalId);
    }
  };

  const hanldeReset = () => {
    //Reset the audio
    //TODO: audioElement.current.load();
    //Clear the timeout interval
    clearInterval(intervalId);
    //Set intervalId null
    setIntervalId(null);
    //set the sessionType to 'Session'
    setCurrentSessionType("Session");
    //Reset the session leght to 25 minutes
    setSessionLength(60 * 25);
    //Reset the sessionLength to 5 minutes
    setBreakLength(60 * 5);
    //Reset te timer to 25 minutes
    setTimeLeft(60 * 25);
  };

  return (
    <React.Fragment>
      <Break
        breakLength={breakLength}
        decrementBreakLenght={decrementBreakLenght}
        incrementBreakLenght={incrementBreakLenght}
      />
      <TimeLeft
        breakLength={breakLength}
        sessionLength={sessionLength}
        timerLabel={currentSessionType}
        hanldeStartStop={hanldeStartStop}
        startStopLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Session
        sessionLength={sessionLength}
        decrementSessionLenght={decrementSessionLenght}
        incrementSessionLenght={incrementSessionLenght}
      />
      <button id="reset" onClick={hanldeReset}>
        Reset
      </button>
      <audio
        src="sounds/beep.mp3"
        type="audio/mpeg"
        id="beep"
        ref={audioElement}
      ></audio>
    </React.Fragment>
  );
};

export default App;
