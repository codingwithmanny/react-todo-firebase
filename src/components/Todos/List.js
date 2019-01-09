import React from 'react';
import { TodosContext } from '../../providers/TodoProvider';

const List = () => (
  <TodosContext.Consumer>
    {context => (
      <div className="todos list-groups" style={{ padding: 0 }}>
        {(context.state.todos.length === 0)
          ? (<div className="todo list-group-item">No todos yet</div>)
          : (context.state.todos.map((item, key) => (
            <div
              key={key.toString(2)}
              style={{
                cursor: 'pointer',
              }}
              role="button"
              tabIndex={key}
              onKeyPress={(e) => { if (e.key === 'Enter') { context.handleCheckbox(key); } }}
              onClick={() => context.handleCheckbox(key)}
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
                onClick={e => context.handleRemove(e, key)}
                onKeyPress={(e) => { if (e.key === 'Enter') { context.handleRemove(e, key); } }}
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
          )))
        }
      </div>
    )}
  </TodosContext.Consumer>
);

export default List;
