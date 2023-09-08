import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    task: '',
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    const { task } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={task} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}

export default Main;
