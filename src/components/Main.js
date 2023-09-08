import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    taskName: '',
    taskList: [],
  };

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { taskList } = this.state;
    let { taskName } = this.state;

    taskName = taskName.trim();

    if (taskList.includes(taskName)) {
      return;
    }

    const newTasks = [...taskList];

    this.setState({
      taskList: [...newTasks, taskName],
    });
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
          {taskList.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
