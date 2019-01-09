import React from 'react';
import PropTypes from 'prop-types';

export const TodosContext = React.createContext();

class TodoProvider extends React.Component {
  static propTypes ={
    children: PropTypes.element.isRequired,
  };

  state = {
    todo: '', // eslint-disable-line
    todos: [],
  };

  render() {
    const { children } = this.props;
    return (
      <TodosContext.Provider
        value={{
          state: this.state,
          handleChange: event => this.setState({
            todo: event.currentTarget.value, // eslint-disable-line
          }),
          handleSubmit: (event) => {
            const { todos } = this.state;

            this.setState({
              todo: '', // eslint-disable-line
              todos: [
                {
                  text: event.currentTarget.todo.value,
                  done: false,
                },
                ...todos,
              ],
            });

            event.preventDefault();
          },
          handleCheckbox: (index) => {
            const { todos } = this.state;
            todos[index].done = !todos[index].done;

            this.setState({
              todos,
            });
          },
          handleRemove: (event, index) => {
            event.stopPropagation();
            const { todos } = this.state;
            this.setState({
              todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1),
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
