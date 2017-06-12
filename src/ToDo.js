import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div id='todo'>
        <input type="checkbox" onClick={this.props.handleChecked}/>
        <p>&nbsp;{this.props.text}&nbsp;</p>
        <button onClick={this.props.handleDelete}>X</button>
        <button onClick={this.props.handleEdit}>Edit</button>
        {this.props.children}
      </div>
    )
  };

}

export default ToDo;