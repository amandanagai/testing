import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input name="tempDo" type="text" placeholder="what do you need to do?" value={this.props.tempDo} onChange={this.props.handleChange}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  };

}

export default TodoForm;