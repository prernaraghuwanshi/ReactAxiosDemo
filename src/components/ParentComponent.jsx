import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Employee from "./Employee";
import API from "../integration/integrate";

class ParentComponent extends Component {
  state = {
    name: "STATE NAME",
    employees: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
        });
      })
      .catch();
    //console.log(this.state.employees);
  }

  changeName = () => {
    this.setState({ name: "Name changed" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ChildComponent handleChange={this.changeName} />
        {this.state.employees.map((emp) => (
          <Employee id={emp.id} name={emp.name}/>
        ))}
      </div>
    );
  }
}

export default ParentComponent;
