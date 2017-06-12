import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div id='todo'>
        <input type="checkbox" onClick={this.props.handleChecked}/>
        <p>&nbsp;{this.props.text}&nbsp;</p>
        <button onClick={this.props.handleDelete}>X</button>
      </div>
    )
  };

}

export default ToDo;