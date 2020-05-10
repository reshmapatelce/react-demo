import React, { Component } from 'react';
import TodoForm from './demos/todo/TodoForm';
import Validate from './demos/validate/Validate';
import Post from './demos/posts/Post';

class Content extends Component {

  render() {
    const { demoId, postId } = this.props;
    return (
      <div className="content">
        {demoId === "todo-demo" && <TodoForm />}
        {demoId === "todo-demo1" && <Validate />}
        {demoId === "todo-demo2" && <Post postId={postId} setDescription={this.props.setDescription} />}
      </div>
    )
  }
}

export default Content;