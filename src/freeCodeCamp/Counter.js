import React, { useState } from "react";
import PropTypes from "prop-types";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decremenetCoutner = this.decremenetCoutner.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: (this.state.counter += 1)
    });
  }

  decremenetCoutner() {
    this.setState({
      counter: (this.state.counter -= 1)
    });
  }

  render() {
    return (
      <div className="divider">
        <h1>{this.props.title}</h1>
        <div>{`This is my counter ${this.state.counter}`}</div>
        <button onClick={this.incrementCounter}>Click to Count Up</button>
        <button onClick={this.decremenetCoutner}>Click to Cout Down</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  title: "Counter"
};

Counter.propTypes = {
  title: PropTypes.string.isRequired
};
