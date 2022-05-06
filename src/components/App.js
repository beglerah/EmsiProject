import React, { Component } from "react";
import "./App.css";
import Occupation from "./Occupation";
import IndustriesTable from "./Industries";
import HeaderOccupation from "./HeaderOccupation";
import HeaderRegional from "./HeaderRegional";
import Title from "./Title";
import RegionalTable from "./RegionalTable";
import RegionalGraph  from "./RegionalGraph";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <HeaderOccupation />
        <Occupation/>
        <HeaderRegional/>
        <RegionalGraph/>
        <RegionalTable/>
        <IndustriesTable/>
      </div>
    );
  }
}

export default App;
