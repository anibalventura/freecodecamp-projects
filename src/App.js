import React, { Component } from "react";
import { random } from "lodash";
import "typeface-roboto";
import { Grid } from "@material-ui/core";
import QuoteMachine from "./components/quoteMachine";

const style = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  },
};

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
      <Grid style={style.container} id="quote-box" justify="center">
        <Grid xs={11} lg={8} item>
          {//This is because of an error for share the quote in twitter link on QuoteMachine.jsx
          this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              handleNextQuote={this.handleNextQuote}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default App;
