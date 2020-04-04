import React, { Component } from "react";

class Button extends Component {
  render() {
    const { buttonDisplayName, clickHandler } = this.props;
    return (
      <React.Fragment>
        <button>{buttonDisplayName}</button>
      </React.Fragment>
    );
  }
}

export default Button;
