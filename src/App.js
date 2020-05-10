import React, { Component } from 'react';
// import Myform from "./Form";
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Content from './pages/Content';
import Footer from './pages/Footer';
import './App.css';

class App extends Component {
  state = {
    demoId: "todo-demo1",
    postId: null,
    postDesc: null
  }

  demoChangeHandler = (id) => {
    this.setState({
      demoId: id
    })
  }
  postHandler = (postId) => {
    this.setState({
      postId
    })
  }

  setDescription = desc => {
    this.setState({ postDesc: desc })
  }

  render() {
    const { demoId, postId, postDesc } = this.state;
    return (
      <div>
        <Header />
        <Navbar />
        <div className="content-body">
          <Sidebar changeDemo={this.demoChangeHandler} postClick={this.postHandler} postDesc={postDesc} />
          <Content demoId={demoId} postId={postId} setDescription={this.setDescription} />
          <div style={{ clear: 'both' }}></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
