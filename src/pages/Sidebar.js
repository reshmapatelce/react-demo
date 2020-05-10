import React, { Component } from 'react';
import axios from 'axios';
import PostList from "./demos/posts/PostList";

class Sidebar extends Component {
  state = {
    postData: []
  }

  getPostDetails = () => {
    this.props.changeDemo("todo-demo2");
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        postData: response.data.slice(0, 4)
      });
    });
  }

  render() {
    const { postData } = this.state;
    return (
      <div className="sidebar">
        <h1>Demo List</h1>
        <p><a onClick={() => this.props.changeDemo("todo-demo")}>Demo1</a></p>
        <p><a onClick={() => this.props.changeDemo("todo-demo1")}>Demo2</a></p>
        <p><a onClick={this.getPostDetails}>Demo3</a></p>
        {postData.length > 0 ? <PostList postDetails={postData} postClick={this.props.postClick} /> : null}
      </div>

    )
  }
}

export default Sidebar;