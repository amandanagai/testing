import React, { Component } from 'react';
import ToDo from './ToDo';
import {TodoForm, EditForm} from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doList: [],
      tempDo: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    doList.push({key: this.guid(), todo: this.state.tempDo, isChecked: false});
    this.setState({
      doList: doList,
      tempDo: ''
    })
  };

  handleDelete(id) {
    let doList = this.state.doList.slice();
    for (var i = 0; i < doList.length; i++) {
      if (doList[i].key === id) {
        doList.splice(i, 1);
      }
    }
    this.setState({doList});
  };

  handleChecked(id) {
    let doList = this.state.doList.slice();
    for (var i = 0; i < doList.length; i++) {
      if (doList[i].key === id) {
        doList[i].isChecked = doList[i].isChecked? false : true;
      }
    }
    this.setState(
      {doList}
    )
  }

  handleEdit(id) {
    let doList = this.state.doList.slice(), tempDo;
    for (var i = 0; i < doList.length; i++) {
      if (doList[i].key === id) {
        tempDo = doList[i].todo
      }
    }
    this.setState(
      {tempDo}
    )
  }

  handleUpdate(id) {
    let doList = this.state.doList.slice();
    for (var i = 0; i < doList.length; i++) {
      if (doList[i].key === id) {
        doList[i].todo = this.state.tempDo;
      }
    }
    this.setState(
      doList: doList
      // tempDo = ''
    )
  }

  render() {
    let list = this.state.doList.map((td) => {
      if (!td.isChecked && !this.state.tempDo) {
        return <ToDo key={td.key}                           
                text={td.todo}
                handleDelete={this.handleDelete.bind(this, td.key)}
                handleChecked={this.handleChecked.bind(this, td.key)}
                handleEdit={this.handleEdit.bind(this, td.key)}
                checked
                />
      } else if (!td.isChecked && this.state.tempDo) {
        return <ToDo key={td.key}                           
                text={td.todo}
                handleDelete={this.handleDelete.bind(this, td.key)}
                handleChecked={this.handleChecked.bind(this, td.key)}
                checked>
                <EditForm handleUpdate={this.handleUpdate.bind(this, td.key)} tempDo={this.state.tempDo} handleChange={this.handleChange}/>
                </ToDo>
                
      }  else {
        return <ToDo key={td.key}                           
                text={td.todo}
                handleDelete={this.handleDelete.bind(this, td.key)}
                handleChecked={this.handleChecked.bind(this, td.key)}
                />
      }
      // else {
      //   return <Alert/>
      // }
    })

    return (
      <div>
        <TodoForm handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        tempDo={this.state.tempDo}
        />
        <ul>
          {list}
        </ul>
      </div>
    )
  };
};

export default TodoList;