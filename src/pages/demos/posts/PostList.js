import React, { Component } from "react";

class PostList extends Component {
  state = {
    postId: null
  }

  getCurrentPOst = (id) => {
    this.props.postClick(id);
    this.setState({
      postId: id
    })
  }

  
  render() {
    const { postDetails, postLoading } = this.props;
    const { postId } = this.state;
    if (postLoading) {
      return "Fetching...";
    }
    return (
      <ol>
        {postDetails.map(post => {
          return <li key={post.id} onClick={() => this.getCurrentPOst(post.id)} className={post.id === postId ? "selected" : null} > {post.title}</li>
        })
        }
      </ol >


    )
  }
}
export default PostList;