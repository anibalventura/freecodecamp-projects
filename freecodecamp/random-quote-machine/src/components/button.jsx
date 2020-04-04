import React, { Component } from "react";

class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <React.Fragment>
        <button onClick={handleClick}>New Quote</button>
      </React.Fragment>
    );
  }
}

export default Button;
