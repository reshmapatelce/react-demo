import React, { Component } from "react";
import './Demo.css';
import DemoContent from "./DemoContent";
import DemoSidebar from "./DemoSidebar";

class Demo extends Component {
  render() {
    return (
      <div className="content-body">
        <DemoContent />
        <DemoSidebar />
        <div className="content-clear"></div>
      </div>
    )
  }
}

export default Demo;