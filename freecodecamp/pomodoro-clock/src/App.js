import React, { useState } from "react";
import Break from "./components/break";
import Session from "./components/session";

const App = () => {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);

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

  //Decrease the value of setSessionLength by 1 minute = 60 secs
  const decrementSessionLenght = () => {
    const newSessionLenght = sessionLength - 60;
    if (newSessionLenght < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLenght);
    }
  };

  //Increment the value of setSessionLength by 1 minute = 60 secs
  const incrementSessionLenght = () => {
    setSessionLength(sessionLength + 60);
  };

  return (
    <React.Fragment>
      <Break
        breakLength={breakLength}
        decrementBreakLenght={decrementBreakLenght}
        incrementBreakLenght={incrementBreakLenght}
      />
      <Session
        sessionLength={sessionLength}
        decrementSessionLenght={decrementSessionLenght}
        incrementSessionLenght={incrementSessionLenght}
      />
    </React.Fragment>
  );
};

export default App;
