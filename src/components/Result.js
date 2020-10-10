import React, { Component } from "react";

export class Result extends Component {
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  render() {
    return (
      <div>{this.props.isActive ? <h3>Fuel Required: {this.props.fuelRequired}L</h3> : null}</div>
    );
  }
}

export default Result;
