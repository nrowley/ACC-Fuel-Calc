import React, { Component } from "react";

export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fuelRequired: this.props.fuelRequired,
      isActive: this.props.isActive,
    };
  }
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  render() {
    return (
      <div>{this.state.isActive ? <h3>Fuel Required: {this.state.fuelRequired}</h3> : null}</div>
    );
  }
}

export default Result;
