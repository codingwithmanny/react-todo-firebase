import React from 'react';
import { TodosContext } from '../../providers/TodoProvider';

const Add = () => (
  <TodosContext.Consumer>
    {context => (
      <form onSubmit={context.handleSubmit} style={{ marginBottom: '20px' }}>
        <input disabled={context.state.loading} name="todo" onChange={context.handleChange} value={context.state.todo} className="form-control" type="text" placeholder={(context.state.loading) ? 'Loading' : 'Enter todo here... [Press Enter]'} autoComplete="off" />
      </form>
    )}
  </TodosContext.Consumer>
);

export default Add;
