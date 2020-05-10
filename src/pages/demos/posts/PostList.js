import React, { Component } from "react";

class PostList extends Component {

  state = {
    selected: null
  }

  render() {
    const { postDetails, postClick } = this.props;
    return (
      <ol>
        {postDetails.map(post => {
          return <li key={post.id} onClick={() => postClick(post.id)}>{post.title}</li>
        })}
      </ol>
    )
  }
}
export default PostList;