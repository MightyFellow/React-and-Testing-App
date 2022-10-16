import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };
  }
  incrementCounter = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    const errorClass = this.state.error ? "" : "hidden";
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <div data-test="error-message" className={`error ${errorClass}`}>
          The counter cannot go below zero
        </div>
        <button data-test="increment-button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
