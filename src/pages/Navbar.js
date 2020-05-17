import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="/example">Example</NavLink>
        <NavLink activeClassName="selected" to="/route-demo">Demo</NavLink>
        <NavLink exact activeClassName="selected" to="/about">About</NavLink>
        <NavLink activeClassName="selected" to="/about/1">About 1</NavLink>
        <NavLink activeClassName="selected" to="/about/2">About 2</NavLink>
        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
      </div>
    )
  }
}

export default withRouter(Navbar);