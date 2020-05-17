import React, { Component } from "react";
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null,
      isLoading: false,
      description: null,
      showPostId: null
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
    // if (this.props.showPostBtn) {
    //   this.setState({ showPostId: null })
    // }
    if (this.props.postId !== prevProps.postId) {
      this.getPostData();
    }
  }

  componentDidMount() {
    if (this.state.postId) {
      this.getPostData();
    }
  }
  buttonClicked = (id) => {
    console.log("id", id)
    this.props.setDescription(id);
    this.setState({ showPostId: id })
  }

  render() {

    const { postData, isLoading, showPostId } = this.state;

    console.log("showPostId", showPostId);
    console.log("pid", this.props.postId);
    if (isLoading) {
      return "Fetching..";
    }
    return (
      <div>
        {postData ? <div><h1> {postData.title}</h1>
          <p>{postData.body}</p>
          {this.props.postDesc !== this.props.postId ? <button onClick={() => this.buttonClicked(postData.id)}>Get Data</button> : null}
        </div> : "Please Select any one Post"}
      </div>
    )
  }
}

export default Post;