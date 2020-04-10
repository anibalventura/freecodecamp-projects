import React, { Component } from "react";

class Button extends Component {
  sendToParent = () => {
    this.props.handleButton(this.props.name);
  };

  render() {
    const { name, id } = this.props;
    return (
      <button id={id} onClick={this.sendToParent} className="btn">
        {name}
      </button>
    );
  }
}

export default Button;
