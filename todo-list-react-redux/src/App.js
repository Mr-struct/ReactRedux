import React from 'react';
import AddTodo from "./component/AddTodo"
import ListTodo from './component/ListTodo';

function App() {
  return (
    <div className="container">
      <h1 className="center">Todo's</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
