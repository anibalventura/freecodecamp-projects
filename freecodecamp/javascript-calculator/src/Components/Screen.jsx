import React, { Component } from "react";

class Screen extends Component {
  render() {
    const { current, result } = this.props;
    return (
      <React.Fragment>
        <p>{current}</p>
        <p>{result}</p>
      </React.Fragment>
    );
  }
}

export default Screen;
