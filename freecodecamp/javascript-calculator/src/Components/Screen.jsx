import React, { Component } from "react";

class Screen extends Component {
  render() {
    const { current, result } = this.props;
    return (
      <div id="display">
        <p>{current}</p>
        <p>{result}</p>
      </div>
    );
  }
}

export default Screen;
