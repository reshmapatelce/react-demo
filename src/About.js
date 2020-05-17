import React, { Component } from "react";

class About extends Component {
  render() {
    return <div>
      <h2>About!</h2>
      <b>User Id:</b> {this.props.match.params.id}
    </div>
  }
}

export default About;