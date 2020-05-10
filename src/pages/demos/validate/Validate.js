import React, { Component } from 'react';
import UserInputStyle from './UserInputStyle'

class Validate extends Component {
  state = {
    userInput: ''
  }

  changeUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }
  deleteHandler = (index) => {
    const textData = [...this.state.userInput]
    textData.splice(index, 1);
    this.setState({
      userInput: textData.join('')
    });
  }

  renderMessage = (str) => {
    if(str.length <=5){
      return "Too short text"
    }
    return "Too Long text"
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeUserInput} value={this.state.userInput} />
        <div>{this.renderMessage(this.state.userInput)}</div>
        <UserInputStyle userInputText={this.state.userInput} deleteHandler={this.deleteHandler} />
      </div>
    )
  }
}

export default Validate;