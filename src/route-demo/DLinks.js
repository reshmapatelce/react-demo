import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DLinks extends Component {
  render() {
    return (
      <div className="demo-links">
        <h3>Demo List</h3>
        <NavLink to="/route-demo/d1">Demo Link 1</NavLink><br />
        <NavLink to="/route-demo/d2">Demo Link 2</NavLink><br />
        <NavLink to="/route-demo/d3">Demo Link 3</NavLink><br />
      </div>
    );
  }
}

export default DLinks;