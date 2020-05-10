import React, { Component } from 'react';
import Todolist from './Todolist';

class TodoForm extends Component {
  state = {
    todoName: "",
    todoList: [
      { todo: "task1", id: "1", completed: false },
      { todo: "task2", id: "2", completed: false },
      { todo: "task3", id: "3", completed: false }
    ],

    todoId: null,
    todoError: null
  }

  // add/update todo list handler
  todoListHandler = (e) => {
    e.preventDefault();
    const { todoName, todoList, todoId } = this.state;

    if (todoName === "") {
      this.setState({
        todoError: "Please enter task"
      })
      return false;
    }
    const todos = [...todoList];

    if (todoId) {
      const todoIndex = todos.findIndex(todo => todo.id === todoId);
      if (todoIndex === -1)
        return false;
      todos[todoIndex].todo = todoName;
    } else {
      todos.push({ todo: todoName, id: Math.random() });
    }
    this.setState({
      todoList: todos,
      todoName: "",
      todoId: null,
      todoError: null
    });
  }

  // input change handler for todo
  todoNameChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handle click event of the edit button
  editTodoHandler = (id) => {
    const todoObj = this.state.todoList.find(todo => todo.id === id);
    if (!todoObj) {
      return;
    }
    this.setState({
      todoName: todoObj.todo,
      todoId: todoObj.id
    })
  }

  // handle click event of the delete button
  deleteTodoHandler = (id) => {
    const list = this.state.todoList.filter(ele => ele.id !== id);
    this.setState({ todoList: list });
  }
  // handle click event of copleted todo
  completedHandler = (id) => {
    const todos = [...this.state.todoList];

    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1)
      return false;

    todos[todoIndex].completed = !todos[todoIndex].completed;

    this.setState({
      todoList: todos
    })
  }

  render() {
    const { todoId, todoList, todoName, todoError } = this.state;
    return (
      <div>
        <form className="todotext">
          <input
            type="text"
            name="todoName"
            value={todoName}
            onChange={this.todoNameChange} />
          <button
            onClick={this.todoListHandler}
            className="addBtn" >
            {todoId ? "Update" : "Add"}
          </button>
        </form>
        <div style={{ clear: 'both' }}></div>
        {todoError && <div>{todoError}</div>}
        <Todolist
          todolist={todoList}
          editHandler={this.editTodoHandler}
          deleteHandler={this.deleteTodoHandler}
          completedHandler={this.completedHandler} />
      </div>
    )
  }
}

export default TodoForm;