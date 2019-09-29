import React from "react";

class StopWatch extends React.Component {
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({ lapse: Date.now() - startTime });
        });
      }

      return { running: !state.running };
    });
  };

  handleStopClick = () => {
    clearInterval(this.timer);
    this.setState({ lapse: 0, running: false });
  };

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const { lapse, running } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}>{lapse}ms</label>
        <button onClick={this.handleRunClick} style={{ marginLeft: 20 }}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleStopClick} style={{ marginLeft: 20 }}>
          Clear
        </button>
      </div>
    );
  }
}

// const StopWatch = ({ lapse, running }) => {};

export default StopWatch;
