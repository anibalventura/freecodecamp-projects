import React, { Component } from "react";
import "./style.sass";

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    this.audio.current.play();

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add("active");

    const display = parent.parentNode;
    display.querySelector("h1").innerText = `"${id}" is playing`;
  };

  render() {
    const { text, audio } = this.props;
    return (
      <div className="drum-pad" onClick={this.playSound} id={`${text}-key`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}

// When press a key is play a sound
document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.play();

    const parent = audio.parentNode;
    parent.classList.add("active");

    const display = parent.parentNode;
    display.querySelector("h1").innerText = `"${id}" is playing`;
  }
});

export default DrumPad;
