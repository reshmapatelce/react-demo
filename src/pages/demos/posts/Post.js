import React, { Component } from "react";
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null,
      isLoading: false,
      description: null
    }
  }

  getPostData = () => {
    this.setState({ isLoading: true })
    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.postId).then(response => {
      this.setState({
        postData: response.data,
        isLoading: false
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
    const { postData, isLoading, description } = this.state;
    if (isLoading) {
      return "Fetching..";
    }
    return (
      <div>
        {postData ? <div><h1> {postData.title}</h1>
          <p>{postData.body}</p>
          <button onClick={() => this.props.setDescription(postData.id)}>Get Data</button>
        </div> : "Please Select any one Post"}
        {description}
      </div>
    )
  }
}

export default Post;