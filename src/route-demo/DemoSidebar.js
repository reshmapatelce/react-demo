import React, { Component } from "react";
import DLinks from "./DLinks";
import DPostList from "./DPostList";

class DemoSidebar extends Component {
  render() {
    return (
      <div className="sidebar-area">
        <DLinks />
        <DPostList />
      </div>
    );
  }
}

export default DemoSidebar;