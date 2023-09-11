import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

function Form({ handleSubmit, handleChange, taskName }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input type="text" onChange={handleChange} value={taskName} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
};

export default Form;
