import React, { Component } from 'react';

import './Main.css';
import Form from './Form';
import Tasks from './Tasks';

class Main extends Component {
  state = {
    taskName: '',
    taskList: [],
    index: -1,
  };

  componentDidMount() {
    const taskList = JSON.parse(localStorage.getItem('tasks'));

    if (!taskList) {
      return;
    }

    this.setState({ taskList });
  }

  componentDidUpdate(prevProps, prevState) {
    const { taskList } = this.state;

    if (taskList === prevState.taskList) {
      return;
    }

    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { taskList } = this.state;

    this.setState({
      taskName: taskList[index],
      index,
    });
  };

  handleDelete = (e, index) => {
    const { taskList } = this.state;
    const newTaskList = [...taskList];

    newTaskList.splice(index, 1);

    this.setState({
      taskList: [...newTaskList],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { taskList, index } = this.state;
    let { taskName } = this.state;

    taskName = taskName.trim();

    if (!taskName || taskList.includes(taskName)) {
      return;
    }

    const newTasks = [...taskList];

    if (index === -1) {
      this.setState({
        taskList: [...newTasks, taskName],
        taskName: '',
      });
    } else {
      newTasks[index] = taskName;

      this.setState({
        taskList: [...newTasks],
        taskName: '',
        index: -1,
      });
    }
  };

  render() {
    const { taskName, taskList } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          taskName={taskName}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          taskList={taskList}
        />
      </div>
    );
  }
}

export default Main;
