import React, { Component } from "react";

class DPostList extends Component {
  render() {
    return (
      <div className="post-list">
        <h3>Post List</h3>
        <ol>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
          <li>Post 5</li>
        </ol>
      </div>
    );
  }
}

export default DPostList;