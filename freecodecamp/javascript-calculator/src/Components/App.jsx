import React, { Component } from "react";
import Button from "./Button";
import Screen from "./Screen";

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
      "/",
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
      <React.Fragment>
        <h1 className="title">Calculator App</h1>
        <div className="calculator">
          <div className="screen">
            <Screen current={this.state.current} result={this.state.result} />
          </div>
          <div className="btn-container">
            {buttons.map((items, i) => (
              <Button
                handleButtonClick={this.handleButtonClick}
                key={i}
                name={items}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
