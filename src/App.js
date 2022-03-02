import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => {
          if (todo.completed === true)
            return todo;
        }))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => {
          if (todo.completed === false)
            return todo;
        }))
        break;
      default:
        setFilterTodos(todos);
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null)
      localStorage.setItem('todos', JSON.stringify([]));
    else {
      let todolist = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolist);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My TODO List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
