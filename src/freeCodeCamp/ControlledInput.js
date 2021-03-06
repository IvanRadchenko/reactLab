import React, { useState } from "react";
import PropTypes from "prop-types";

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="divider">
        <input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Constrolled Input</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
