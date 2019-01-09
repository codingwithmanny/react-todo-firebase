import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const List = ({ todos, handleCheckbox, handleRemove }) => (
  <div className="todos list-groups" style={{ padding: 0 }}>
    {(todos.length === 0)
      ? (<div className="todo list-group-item">No todos yet</div>)
      : (todos.map((item, key) => (
        <Todo
          item={item}
          index={key}
          key={key.toString(2)}
          handleCheckbox={handleCheckbox}
          handleRemove={handleRemove}
        />
      )))
    }
  </div>
);

List.defaultProps = {
  todos: [],
};

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  handleCheckbox: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default List;
