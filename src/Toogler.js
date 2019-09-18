import React, { useState } from "react";
import PropTypes from "prop-types";

export default class Toogler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toogleVisibility = this.toogleVisibility.bind(this);
  }

  toogleVisibility() {
    if (this.state.visibility === false) {
      this.setState({
        visibility: true
      });
    } else {
      this.setState({
        visibility: false
      });
    }
  }

  render() {
    const visible = "el--visible";
    const hidden = "el--hidden";
    if (this.state.visibility) {
      return (
        <div className="divider">
          <h1 className={hidden}>Now u see me</h1>
          <button onClick={this.toogleVisibility}>Toogle Me</button>
        </div>
      );
    } else {
      return (
        <div className="divider">
          <h1 className={visible}>Now u see me</h1>
          <button onClick={this.toogleVisibility}>Toogle Me</button>
        </div>
      );
    }
  }
}

Toogler.propTypes = {
  visibility: PropTypes.bool.isRequired
};
