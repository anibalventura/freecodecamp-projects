import React, { Component } from "react";
import { random } from "lodash";
import QuoteMachine from "./components/quoteMachine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
  }

  //Get and fetch the date for quotes and authors
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.handleNextQuote));
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.generateNewQuoteIndex)
    ) {
      return undefined;
    } else {
      return this.state.quotes[this.state.generateNewQuoteIndex];
    }
  }

  /*Return an integer representing an index in state.quotes
  If state.quotes is empty, return undefined*/
  generateNewQuoteIndex = () => {
    if (!this.state.quotes.length) {
      return undefined;
    } else {
      return random(0, this.state.quotes.length - 1);
    }
  };

  // When click Next Quote button, generate a new quote
  handleNextQuote = () => {
    this.setState({ generateNewQuoteIndex: this.generateNewQuoteIndex() });
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteMachine
          selectedQuote={this.selectedQuote}
          handleNextQuote={this.handleNextQuote}
        />
      </div>
    );
  }
}

export default App;
