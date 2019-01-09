import React from 'react';
import { TodosContext } from '../../providers/TodoProvider';

const Add = () => (
  <TodosContext.Consumer>
    {context => (
      <form onSubmit={context.handleSubmit} style={{ marginBottom: '20px' }}>
        <input name="todo" onChange={context.handleChange} value={context.state.todo} className="form-control" type="text" placeholder="Enter todo here... [Press Enter]" autoComplete="off" />
      </form>
    )}
  </TodosContext.Consumer>
);

export default Add;
