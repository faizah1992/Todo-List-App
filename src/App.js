import logo from './logo.svg';
import './App.css';
import Form from "./components/TodoList"
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>ToDo List</h1>
        <form>
            <input type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
      </header>
      <TodoList/>
    
      
    </div>
  );
}

export default App;
