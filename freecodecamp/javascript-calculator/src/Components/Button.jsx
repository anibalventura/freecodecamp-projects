import React, { Component } from "react";

class Button extends Component {
  sendToParent = () => {
    this.props.handleButtonClick(this.props.name);
  };

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <button
          onClick={this.sendToParent}
          className="btn"
        >
          {name}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
