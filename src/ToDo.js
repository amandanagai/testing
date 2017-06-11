import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div id='todo'>
        <p>{this.props.text}</p>
        <button onClick={this.props.handleDelete}>X</button>
      </div>
    )
  };

}

export default ToDo;