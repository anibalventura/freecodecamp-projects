import React, { Component } from "react";
import Button from "./Button";
import Screen from "./Screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: "0",
      operatorFlag: false,
      decimalFlag: false,
    };
  }

  handleButton = (buttonName) => {
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;
    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (this.state.currentNumber !== "0") {
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
        }
        break;
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (!this.state.operatorFlag) {
          currentNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          currentNumber = newNumber;
          currentNumber += buttonName;
        }
        break;
      case buttonName === "Clear":
        currentNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      case buttonName === "=":
        currentNumber = eval(currentNumber);
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        break;
      case buttonName === ".":
        if (!this.state.decimalFlag) {
          currentNumber += ".";
          this.setState({ decimalFlag: true });
        }
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Javascript Calculator</h1>
        <div className="calculator">
          <div className="screen">
            <Screen id="display" currentNumber={this.state.currentNumber} />
          </div>
          <div className="btn-container">
            <Button id="clear" name="Clear" handleButton={this.handleButton} />
            <Button id="equals" name="=" handleButton={this.handleButton} />
            <Button id="seven" name="7" handleButton={this.handleButton} />
            <Button id="eight" name="8" handleButton={this.handleButton} />
            <Button id="nine" name="9" handleButton={this.handleButton} />
            <Button id="divide" name="/" handleButton={this.handleButton} />
            <Button id="four" name="4" handleButton={this.handleButton} />
            <Button id="five" name="5" handleButton={this.handleButton} />
            <Button id="six" name="6" handleButton={this.handleButton} />
            <Button id="multiply" name="*" handleButton={this.handleButton} />
            <Button id="one" name="1" handleButton={this.handleButton} />
            <Button id="two" name="2" handleButton={this.handleButton} />
            <Button id="three" name="3" handleButton={this.handleButton} />
            <Button id="subtract" name="-" handleButton={this.handleButton} />
            <Button id="zero" name="0" handleButton={this.handleButton} />
            <Button id="decimal" name="." handleButton={this.handleButton} />
            <Button id="add" name="+" handleButton={this.handleButton} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
