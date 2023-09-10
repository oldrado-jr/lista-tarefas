import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    taskName: '',
    taskList: [],
    index: -1,
  };

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

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input type="text" onChange={this.handleChange} value={taskName} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {taskList.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
