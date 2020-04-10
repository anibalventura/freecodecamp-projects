import React, { Component } from "react";

class Screen extends Component {
  render() {
    const { currentNumber, id } = this.props;
    return <div id={id}>{currentNumber}</div>;
  }
}

export default Screen;
