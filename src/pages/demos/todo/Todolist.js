import React, { Component } from 'react';

class Todolist extends Component {
  state = {
    deleteid: null
  }
  deleteConfirmHandler = (id) => {
    this.setState({
      deleteid: id
    })
  }
  removeDialogBox = (id) => {
    this.props.deleteHandler(id);

    this.setState({
      deleteid: null
    })
  }
  cancleHandler = () => {
    this.setState({
      deleteid: null
    })
  }

  render() {
    const { todolist, editHandler, completedHandler } = this.props;
    const { deleteid } = this.state;
    const len = todolist.length;
    return (
      <div>
        <ul>
          {len === 0 && <div>No Task found</div>}
          {todolist.map((t, i) => {
            return <li className="tododata" key={i}>
              <input type="checkbox" onClick={completedHandler.bind(this, t.id)} />
              <span style={{ textDecoration: t.completed ? "line-through" : "" }}>{t.todo}</span>
              <a onClick={editHandler.bind(this, t.id)} className="edit">Edit</a>
              <a onClick={this.deleteConfirmHandler.bind(this, t.id)} className="close">X</a>
            </li>
          })}
        </ul>
        {deleteid ? <div>Are you sure want to delete this? <button onClick={this.removeDialogBox.bind(this, deleteid)} className="confBtn">yes</button><button className="confBtn" onClick={this.cancleHandler}>No</button></div> : ""}
      </div>
    )
  }
}

export default Todolist;