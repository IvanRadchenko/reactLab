import React, { useState } from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: `Press the key `,
      value: 0
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addValue = this.addValue.bind(this);
  }

  //Event handlers
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleEnter(key) {
    this.setState({
      message: `Wow, u pressed the ${key}`
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter(event.key);
    }

    this.handleEnter(event.key);
  }

  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div className="divider">
        <div>
          <DidMount message={this.state.message} />
        </div>
        <div>
          <ShouldCompUpdate value={this.state.value} addValue={this.addValue} />
        </div>
      </div>
    );
  }
}

class DidMount extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("DidMount component Receiving new props...");
  }
  componentDidUpdate() {
    console.log("DidMount Component re-rendered.");
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

class ShouldCompUpdate extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // change code below this line
    if (nextProps.value % 2 !== 0) {
      return false;
    }
    return true;
    // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log("ShouldCompUpdate component Receiving new props...");
  }
  componentDidUpdate() {
    console.log("ShouldCompUpdate Component re-rendered.");
  }

  render() {
    return (
      <div>
        <h1>Count only if even {this.props.value}</h1>
        <button onClick={this.props.addValue}>Add</button>
      </div>
    );
  }
}
