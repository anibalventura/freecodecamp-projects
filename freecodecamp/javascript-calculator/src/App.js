import React, { Component } from "react";
import Button from "./Components/Button";
import Screen from "./Components/Screen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: [],
      result: 0,
    };
  }

  handleButtonClick = (button) => {
    const current = [...this.state.current];
    current.push(button);
    this.setState({ current });
  };

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
        <Screen current={this.state.current} result={this.state.result} />
        {buttons.map((items, i) => (
          <Button
            handleButtonClick={this.handleButtonClick}
            key={i}
            name={items}
          />
        ))}
      </div>
    );
  }
}

export default App;
