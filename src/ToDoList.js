import React, { useState } from "react";

const textAreaStyles = {
  width: 245,
  margin: 5
};

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      toDoList: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray
    });
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    const items = this.state.toDoList.map(item => (
      <li key={item} value={item}>
        {item}
      </li>
    ));

    return (
      <div className="divider">
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Seperate To Do items with commas!"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1> My "To Do List"</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
