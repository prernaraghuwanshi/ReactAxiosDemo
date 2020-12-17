import "./App.css";
import React, { Component } from "react";

import ParentComponent from "./components/ParentComponent";


class App extends React.Component {
  // url = "https://www.google.com/";
  // constructor() {
  //   super();
  //   this.state = {
  //     userName: "",
  //   };
  // }
  // // onClick = ($event) => {
  // //   window.open(this.url, "_blank");
  // // }

  // onNameChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ userName: event.target.value });
  // };

  render() {
    return (
      <div >
        <ParentComponent/>
      </div>
    );
  }
}

export default App;
