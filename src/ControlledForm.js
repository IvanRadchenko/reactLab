import React, { useState } from "react";

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }

  render() {
    return (
      <div className="divider" onSubmit={this.handleSubmit}>
        <form className="test-form">
          <textarea cols="10" rows="4" />
          <input
            placeholder="Type me"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          Input <strong>{this.state.input}</strong> pass value to a Submit{" "}
          <strong>{this.state.submit}</strong>
        </p>
      </div>
    );
  }
}
