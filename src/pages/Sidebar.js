import React, { Component } from 'react';
import axios from 'axios';
import PostList from "./demos/posts/PostList";

class Sidebar extends Component {
  state = {
    postData: [],
    isLoading: false,
    getData: null
  }

  getPostDetails = () => {
    this.props.changeDemo("todo-demo2");
    this.setState({ isLoading: true });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        postData: response.data.slice(0, 4),
        isLoading: false
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.postDesc !== prevProps.postDesc) {
      const details = this.state.postData.find((post) => post.id === this.props.postDesc)
      this.setState({ getData: details });
    }
  }
  closeDesc = () => { 
    this.setState({ getData: null });
    this.props.showPostId()
  }
  render() {
    const { postData, isLoading, getData } = this.state;

    return (
      <div className="sidebar">
        <h1>Demo List</h1>
        <p><a onClick={() => this.props.changeDemo("todo-demo")}>Demo1</a></p>
        <p><a onClick={() => this.props.changeDemo("todo-demo1")}>Demo2</a></p>
        <p><a onClick={this.getPostDetails}>Demo3</a></p>
        {postData.length > 0 ? <PostList postDetails={postData} postClick={this.props.postClick} postLoading={isLoading} /> : null}
        {getData && <React.Fragment>
          <b>Selected description</b><br />
          {getData.body} <br />
          <button onClick={this.closeDesc}>close</button>
        </React.Fragment>}

      </div>

    )
  }
}

export default Sidebar;