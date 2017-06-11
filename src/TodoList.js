import React, { Component } from 'react';
import ToDo from './ToDo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doList: [],
      tempDo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  guid() {
    var strArr = [];
    for (let i = 0; i < 4; i++) {
      strArr.push((((1+Math.random())*0x10000)|0).toString(16).substring(1));
    }
    return strArr.join('-');
  };

  handleSubmit(e) {
    e.preventDefault();
    let doList = this.state.doList.slice();
    doList.push({key: this.guid(), todo: this.state.tempDo});
    this.setState({
      tempDo: '',
      doList: doList
    })
  };

  handleDelete(e) {
    debugger;
    e.preventDefault();
    let doList = this.state.doList.slice();
    for (var i = 0; i < doList.length; i++) {
      if (doList[i].key === e.target.key) {
        doList.splice(i, 1);
      }
    }
    this.setState({doList});
  };

  render() {
    let list = this.state.doList.map((td) => {
      return <ToDo key={td.key} text={td.todo} handleDelete={this.handleDelete}/>
    })
    return (
      <div>
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} tempDo={this.state.tempDo}/>
        <ul>
          {list}
        </ul>
      </div>
    )
  };
};

export default TodoList;