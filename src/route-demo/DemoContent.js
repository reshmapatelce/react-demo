import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Validate from "../pages/demos/validate/Validate";
import TodoForm from "../pages/demos/todo/TodoForm";

class DemoContent extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="content-area">
        <Switch>
          <Route path={path + "/d1"} component={TodoForm} />
          <Route path={`${path}/d2`} component={Validate} />
          {/* <Route path="router-demo/d3" component={Demo} /> */}
          <Route component={() => <h2>Please select any demo from the list </h2>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(DemoContent);