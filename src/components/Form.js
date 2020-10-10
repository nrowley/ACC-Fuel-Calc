import React, { Component } from "react";
import Result from "./Result";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      fuelUsage: "",
      lapTimes: "",
      showFuelRequired: false,
      fuelRequired: 0,
    };

    this.submitClick = this.submitClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleFuelUsageChange = this.handleFuelUsageChange.bind(this);
    this.handleLapTimesChange = this.handleLapTimesChange.bind(this);
  }

  submitClick = (event) => {
    //console.log(this.state.duration);
    /*
    calculate fuel usage..
    */

    event.preventDefault();
    const { duration, fuelUsage, lapTimes } = this.state;
    const lapTimeInMinutes = this.minutesToSeconds(lapTimes);
    const totalFuelRequired = this.calculateFuel(fuelUsage, lapTimeInMinutes, duration);

    this.setState({
      fuelRequired: totalFuelRequired,
    });

    this.setState({
      showFuelRequired: true,
    });
  };

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

    //this.render();
  }

  //functions
  minutesToSeconds = (lapTimes) => {
    const wholeMinutes = Number(lapTimes.split(":")[0]);
    const seconds = Number(lapTimes.split(":")[1]) / 60;

    console.log((wholeMinutes + seconds).toPrecision(3));

    return (wholeMinutes + seconds).toPrecision(3);
  };

  calculateFuel = (fuelUsage, lapTimes, duration) => {
    return ((duration / lapTimes) * fuelUsage).toPrecision(2);
  };

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
          <Result fuelRequired={this.state.fuelRequired} isActive={this.state.showFuelRequired} />
          <Button id="btn" as="input" type="submit" value="Calculate" />
        </form>
      </div>
    );
  }
}
