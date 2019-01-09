import React from 'react';
import Header from './Header';
import Todos from './Todos';

class App extends React.Component {
  state = {
    todo: '',
    todos: [],
  };

  handleChange = (event) => {
    this.setState({
      todo: event.currentTarget.value,
    });
  }

  handleCheckbox = (index) => {
    const { todos } = this.state;

    todos[index].done = !todos[index].done;

    this.setState({
      todos,
    });
  }

  handleSubmit = (event) => {
    const { todos } = this.state;

    this.setState({
      todo: '',
      todos: [
        {
          text: event.currentTarget.todo.value,
          done: false,
        },
        ...todos,
      ],
    });

    event.preventDefault();
  }

  handleRemove = (event, index) => {
    event.stopPropagation();
    const { todos } = this.state;

    this.setState({
      todo: '',
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1),
      ],
    });
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Header title="React Todo App" />

            <Todos
              todo={todo}
              todos={todos}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCheckbox={this.handleCheckbox}
              handleRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
