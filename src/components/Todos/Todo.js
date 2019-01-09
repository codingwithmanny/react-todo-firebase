import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  item,
  index,
  key,
  handleCheckbox,
  handleRemove,
}) => (
  <div key={`list-${(key + 1)}`} className="todo list-group-item">
    <input onChange={() => handleCheckbox(index)} checked={item.done} className="form-control" type="checkbox" />
    <span style={{
      top: 0,
      bottom: 0,
      left: '3rem',
      right: '5rem',
      lineHeight: '62px',
      display: 'block',
      position: 'absolute',
      textDecoration: (item.done) ? 'line-through' : 'none',
    }}
    >
      {item.text}
    </span>
    <button
      onClick={() => handleRemove(index)}
      type="button"
      className="btn btn-sm btn-danger"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: '1.25rem',
        margin: 'auto 0',
        height: '25px',
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
    &times;
    </button>
  </div>
);

Todo.defaultProps = {
  item: [],
};

Todo.propTypes = {
  item: PropTypes.objectOf({
    text: PropTypes.strig,
    done: PropTypes.bool,
  }),
  index: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Todo;
