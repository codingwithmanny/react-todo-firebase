import React from 'react';
import PropTypes from 'prop-types';
import base from '../base';

export const TodosContext = React.createContext();

class TodoProvider extends React.Component {
  static propTypes ={
    children: PropTypes.element.isRequired,
  };

  state = {
    loading: true,
    todo: '',
    todos: {},
  };

  componentDidMount() {
    const user = 'test';
    this.ref = base.syncState(`${user}/todos`, {
      context: this,
      state: 'todos',
      then: () => {
        this.setState({
          loading: false,
        });
      },
    });
  }

  render() {
    const { children } = this.props;
    const { loading, todo, todos } = this.state;
    return (
      <TodosContext.Provider
        value={{
          loading,
          todo,
          todos,
          state: this.state,
          handleChange: event => this.setState({
            todo: event.currentTarget.value, // eslint-disable-line
          }),
          handleSubmit: (event) => {
            const { todos: todoslist } = this.state;

            const index = ((Object.keys(todoslist).length) > -1)
              ? (Object.keys(todoslist).length)
              : 0;

            todoslist[index] = {
              text: event.currentTarget.todo.value,
              done: false,
            };

            this.setState({
              todo: '',
              todos: todoslist,
            });

            event.preventDefault();
          },
          handleCheckbox: (index) => {
            const { todos: todoslist } = this.state;
            todoslist[index].done = !todoslist[index].done;

            this.setState({
              todos: todoslist,
            });
          },
          handleRemove: (event, index) => {
            event.stopPropagation();
            const { todos: todoslist } = this.state;
            this.setState({
              todos: [
                ...todoslist.slice(0, index),
                ...todoslist.slice(index + 1),
              ],
            });
          },
        }}
      >
        {children}
      </TodosContext.Provider>
    );
  }
}

export default TodoProvider;
