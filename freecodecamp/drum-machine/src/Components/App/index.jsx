import React, { Component } from "react";
import Box from "../Box";
import Display from '../Display'
import "./style.sass";

class App extends Component {
  state = {
    keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  };
  render() {
    const { keys } = this.state;
    return (
      <div id="drum-machine" className="app">

        {keys.map((key, idx) => (
          <Box text={key} id={key} key={idx} />
        ))}
      </div>
    );
  }
}

export default App;
