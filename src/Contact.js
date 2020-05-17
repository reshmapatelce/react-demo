import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import SubContact1 from "./SubContact1";
import SubContact2 from "./SubContact2";

class Contact extends Component {
  render() {
    return <div>
      <h2>Contact!</h2>

      <Link to="/contact/sc">Sub Contact 1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/contact/sc2">Sub Contact 2</Link>

      <br /><br />

      <Switch>
        <Route path="/contact/sc" component={SubContact1} />
        <Route path="/contact/sc2" component={SubContact2} />
      </Switch>

    </div>
  }
}

export default Contact;