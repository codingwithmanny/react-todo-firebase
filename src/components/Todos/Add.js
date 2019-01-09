import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ todo, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
    <input name="todo" onChange={handleChange} value={todo} className="form-control" type="text" placeholder="Enter todo here... [Press Enter]" autoComplete="off" />
  </form>
);

Add.propTypes = {
  todo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Add;
