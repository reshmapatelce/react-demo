import React, { Component } from 'react';

// const UserInputStyle = (props) => {
// }

class UserInputStyle extends Component {
  render() {
    const style = {
      display: "inline-block",
      border: "1px solid #666",
      padding: "11px",
      width: "16px",
      marginRight: "10px"
    }
    const inputText = this.props.userInputText;
    inputText.split('');

    return (
      <div>{
        inputText.split('').map((char, i) => {
          return <p key={i} style={style} onClick={() => this.props.deleteHandler(i)}>{char}</p>
        })
      }</div>
    )
  }
}
export default UserInputStyle;