import React, { Component } from "react";
import PropTypes from "prop-types";

export class Result extends Component {
  render() {
    return (
      <>
        <div>{this.props.isActive ? <h4>Fuel Required: {this.props.fuelRequired}L</h4> : null}</div>
        <div>
          {this.props.isActive ? (
            <p>
              Full formation lap {Number(this.props.fuelRequired) + Number(this.props.fuelPerLap)}L
            </p>
          ) : null}
        </div>
        <div>
          {this.props.isActive ? (
            <p>
              Short formation lap{" "}
              {Number(this.props.fuelRequired) + Number(this.props.fuelPerLap) / 2}L
            </p>
          ) : null}
        </div>
      </>
    );
  }
}

Result.propTypes = {
  fuelRequired: PropTypes.number,
  fuelPerLap: PropTypes.number,
};

export default Result;
