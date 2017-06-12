import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  render() {
    return (
      <div id="main-form">
        <h2>What do you need to do?</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input name="tempDo" type="text" placeholder="what do you need to do?" value={this.props.tempDo} onChange={this.props.handleChange}/>
          <input className="form-button" type="submit" value="Add"/>
        </form>
      </div>
    )
  };

}

class EditForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleUpdate}>
          <input name="editDo" type="text" value={this.props.editDo} onChange={this.props.handleChange}/>
          <input className="form-button" type="submit" value="Update"/>
        </form>
        <button onClick={this.props.handleCancel}>Cancel</button>
      </div>
    )
  };

}

export {TodoForm, EditForm};