import React, { Component } from "react";
import Button from "./Components/Button";
import Screen from "./Components/Screen";

class App extends Component {
  render() {
    const buttons = [
      "AC",
      "+/-",
      "%",
      "+",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
    ];
    return (
      <div>
        <h1>App</h1>
        <Screen />
        {buttons.map((items) => (
          <Button />
        ))}
      </div>
    );
  }
}

export default App;
