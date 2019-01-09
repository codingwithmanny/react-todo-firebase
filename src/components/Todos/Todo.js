import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  item,
  index,
  handleCheckbox,
  handleRemove,
}) => (
  <div
    style={{
      cursor: 'pointer',
    }}
    role="button"
    tabIndex={index}
    onKeyPress={(e) => { if (e.key === 'Enter') { handleCheckbox(index); } }}
    onClick={() => handleCheckbox(index)}
    className="todo list-group-item"
  >
    <input
      style={{
        width: 'auto',
        outline: 'none',
        border: 'none !important',
      }}
      readOnly
      checked={item.done}
      className="form-control"
      type="checkbox"
    />
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
      onClick={e => handleRemove(e, index)}
      onKeyPress={(e) => { if (e.key === 'Enter') { handleRemove(e, index); } }}
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
  item: {},
};

Todo.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  index: PropTypes.number.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Todo;
