import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
          className="btn bg-info border text-white"
        >
          {name}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
