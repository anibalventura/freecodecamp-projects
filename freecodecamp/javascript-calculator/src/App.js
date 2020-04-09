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
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "x",
      "1",
      "2",
      "3",
      "-",
      "+",
      "0",
      ".",
      "=",
    ];
    return (
      <div>
        <h1>App</h1>
        <div className="container-fluid">
          <div className="col">
            <div className="row">
              <Screen current={this.state.current} result={this.state.result} />
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-3">
                {buttons.map((items, i) => (
                  <Button
                    handleButtonClick={this.handleButtonClick}
                    key={i}
                    name={items}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
