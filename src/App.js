import React, { Component } from 'react';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import './App.css';

import Example from './Example';
import Home from './Home';
import About from './About';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from './Notfound';
import Contact from './Contact';
import Demo from './route-demo/Demo';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/example" component={Example} />
          <Route path="/route-demo" component={Demo} />
          <Route path="/about/:id?" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
