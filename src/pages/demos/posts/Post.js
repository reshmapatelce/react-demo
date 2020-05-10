import React, { Component } from "react";
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null
    }
  }

  getPostData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.postId).then(response => {
      this.setState({
        postData: response.data
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.postId !== prevProps.postId) {
      this.getPostData();
    }
  }

  componentDidMount() {
    if (this.state.postId) {
      this.getPostData();
    }
  }

  render() {
    const { postData } = this.state;
    return (
      <div>
        {postData ? <div><h1> {postData.title}</h1>
          <p>{postData.body}</p> </div> : "Please Select any one Post"}
      </div>
    )
  }
}

export default Post;