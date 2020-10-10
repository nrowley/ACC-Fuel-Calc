import React, { Component } from "react";
import Result from "./Result";
import { Button } from "react-bootstrap";
import { doWork } from "./calculation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      fuelUsage: "",
      lapMinutes: "",
      lapSeconds: "",
      showFuelRequired: false,
      fuelRequired: 0,
    };

    this.submitClick = this.submitClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleFuelUsageChange = this.handleFuelUsageChange.bind(this);
    this.handleLapMinChange = this.handleLapMinChange.bind(this);
    this.handleLapSecChange = this.handleLapSecChange.bind(this);
  }

  submitClick = (event) => {
    /*
    calculate fuel usage..
    */

    if (
      this.state.duration &&
      this.state.fuelUsage &&
      this.state.lapMinutes &&
      this.state.lapSeconds !== ""
    ) {
      event.preventDefault();
      const { duration, fuelUsage, lapMinutes, lapSeconds } = this.state;
      const totalFuelRequired = doWork(lapMinutes + ":" + lapSeconds, fuelUsage, duration);

      this.setState({
        fuelRequired: totalFuelRequired,
      });

      this.setState({
        showFuelRequired: true,
      });
    }
    event.preventDefault();
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

  handleLapMinChange(event) {
    this.setState({
      lapMinutes: event.target.value,
    });
  }
  handleLapSecChange(event) {
    this.setState({
      lapSeconds: event.target.value,
    });
  }

  render() {
    return (
      <section className="main-section">
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
            <div className="time-group">
              <label>Average Lap Times</label>
              <div className="form-inline">
                <input
                  type="number"
                  value={this.state.lapTimes}
                  onChange={this.handleLapMinChange}
                  placeholder="minutes"
                  min="0"
                  max="60"
                />
                <input
                  type="number"
                  value={this.state.lapTimes}
                  onChange={this.handleLapSecChange}
                  placeholder="seconds"
                  min="00"
                  max="60"
                />
              </div>
            </div>
            <Result
              fuelRequired={this.state.fuelRequired}
              isActive={this.state.showFuelRequired}
              fuelPerLap={this.state.fuelUsage}
            />
            <Button id="btn" as="input" type="submit" value="Calculate" />
          </form>
        </div>
      </section>
    );
  }
}
