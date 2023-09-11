import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

function Tasks({ handleEdit, handleDelete, taskList }) {
  return (
    <ul className="tasks">
      {taskList.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tasks;
