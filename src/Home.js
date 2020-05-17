import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div>
      <h2>Welcome to Demo Application!</h2>
      <button onClick={() => this.props.history.push('/contact/sc2')}>Sub Contact 2</button>
    </div>
  }
}

export default Home;