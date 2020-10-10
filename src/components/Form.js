import React, { Component } from "react";
import Result from "./Result";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import calc from "../calculations.js";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      fuelUsage: "",
      lapTimes: "",
      showFuelRequired: false,
      fuelRequired: "",
    };

    this.submitClick = this.submitClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleFuelUsageChange = this.handleFuelUsageChange.bind(this);
    this.handleLapTimesChange = this.handleLapTimesChange.bind(this);
  }

  submitClick(event) {
    //console.log(this.state.duration);
    /*
    calculate fuel usage..
    */

    const { duration, fuelUsage, lapTimes } = this.state;
    const lapTimeInMinutes = calc.minutesToSeconds(lapTimes);
    const fuelRequired = calc.calculateFuel(fuelUsage, lapTimeInMinutes, duration);

    this.setState({
      fuelRequired: fuelRequired,
    });

    this.setState({
      showFuelRequired: true,
    });

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

  //functions

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.submitClick}>
          <div className="input-group">
            <label>Duration</label>
            <input
              type="text"
              value={this.state.duration}
              onChange={this.handleDurationChange}
              placeholder="
              Enter duration in minutes"
            />
          </div>
          <div className="input-group">
            <label>Fuel Usage</label>
            <input
              type="text"
              value={this.state.fuelUsage}
              onChange={this.handleFuelUsageChange}
              placeholder="3.5 L/lap"
            />
          </div>
          <div className="input-group">
            <label>Average Lap Times</label>
            <input
              type="text"
              value={this.state.lapTimes}
              onChange={this.handleLapTimesChange}
              placeholder="Enter lap time in minutes"
            />
          </div>
        </form>
        <Result fuelRequired={this.state.fuelRequired} isActive={this.state.showFuelRequired} />
        <Button id="btn" as="input" type="submit" value="Calculate" />
      </div>
    );
  }
}
