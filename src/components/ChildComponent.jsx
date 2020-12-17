import React, { Component } from "react";

class ChildComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello from child</h1>
        <button onClick={this.props.handleChange}>Passingdata</button>
      </div>
    );
  }
}

export default ChildComponent;
