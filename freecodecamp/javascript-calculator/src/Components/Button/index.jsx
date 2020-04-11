import React from "react";

const Button = ({ name, id, handleButton }) => {
  const sendToParent = () => {
    handleButton(name);
  };

  return (
    <button id={id} onClick={sendToParent} className="btn">
      {name}
    </button>
  );
};

export default Button;
