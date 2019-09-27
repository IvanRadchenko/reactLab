import React, { Component, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";

class MountedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  incremenet = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  reset = () => {
    this.setState(state => ({
      counter: 0
    }));
  };
  componenWi;
  componentDidMount() {
    this.timerId = setInterval(this.incremenet, 1000);
    console.log("cDM");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`cDU - ${prevState.counter} current ${this.state.counter}`);
  }
  componentDerivedProps(props, state) {
    if (state.counter === 5) {
      this.reset();
    }
    console.log(`cDRP ${state.counter}`);
  }
  componentWillUnmount() {
    console.log("cDUM");
    clearInterval(this.timerId);
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <hr />
        <div>{counter}</div>
      </>
    );
  }
}

class Wrapper extends Component {
  mount = () => render(<MountedCounter />, document.getElementById("a"));

  unmount = () => unmountComponentAtNode(document.getElementById("a"));

  render() {
    return (
      <>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a" />
      </>
    );
  }
}

export default Wrapper;
