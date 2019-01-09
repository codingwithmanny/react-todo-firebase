import React from 'react';
import Header from './Header';
import TodoProvider from '../providers/TodoProvider';
import Todos from './Todos';

const App = () => (
  <div className="App">
    <div className="container-fluid">
      <div className="row">
        <Header title="React Todo App" />
        <TodoProvider>
          <Todos />
        </TodoProvider>
      </div>
    </div>
  </div>
);

export default App;
