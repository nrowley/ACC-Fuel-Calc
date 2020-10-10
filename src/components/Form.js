import React, { Component } from "react";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      fuelUsage: "",
      lapTimes: "",
    };

    this.submitClick = this.submitClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleFuelUsageChange = this.handleFuelUsageChange.bind(this);
    this.handleLapTimesChange = this.handleLapTimesChange.bind(this);
  }

  submitClick(event) {
    console.log(this.state.duration);
    event.preventDefault();
  }

  handleDurationChange(event) {
    this.setState({
      duration: event.target.value,
    });
  }

  handleFuelUsageChange(event) {
    this.setState({
      fuelUsage: event.target.value,
    });
  }

  handleLapTimesChange(event) {
    this.setState({
      lapTimes: event.target.value,
    });
  }

  render() {
    return (
      <div class="container">
        <form class="form" onSubmit={this.submitClick}>
          <label>Duration</label>
          <input type="text" value={this.state.duration} onChange={this.handleDurationChange} />
          <label>Fuel Usage</label>
          <input type="text" value={this.state.fuelUsage} onChange={this.handleFuelUsageChange} />
          <label>Average Lap Times</label>
          <input type="text" value={this.state.lapTimes} onChange={this.handleLapTimesChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
