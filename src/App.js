import React, { useState } from "react";
import './App.css';
import TodoList from './components/TodoList';
import Form  from "./components/Form"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header className="header">
        <h1>ToDo List</h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      </header>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
