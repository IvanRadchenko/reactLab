import React, { useState } from "react";
const inputStyle = {
  width: 225,
  margin: 5
};

export default class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: ""
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ""
    });
  }

  submit() {
    this.setState({
      userAge: this.state.input
    });
  }

  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You shall not pass</button>;
    return (
      <div className="divider">
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />{" "}
        <br />
        {this.state.userAge > 18
          ? buttonTwo
          : this.state.userAge == ""
          ? buttonOne
          : buttonThree}
      </div>
    );
  }
}
