import React from 'react';
import PropTypes from 'prop-types';
import Add from './Add';
import List from './List';

const Todos = ({
  todo,
  todos,
  handleChange,
  handleSubmit,
  handleCheckbox,
  handleRemove,
}) => (
  <main className="col col-12">
    <Add
      todo={todo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />

    <List
      todos={todos}
      handleCheckbox={handleCheckbox}
      handleRemove={handleRemove}
    />

  </main>
);

Todos.defaultProps = {
  todos: [],
};

Todos.propTypes = {
  todo: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Todos;
