import './App.css';
import React, { useRef, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import TodoList from './TodoList';

function App() {
  const [todos] = useState([{id: 1, name: 'Todo 1', complete: false}]);
  const todoNameRef = useRef();

  function setTodos(todos) {
    this.setState({ todos });
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      name: todoNameRef.current.value,
      complete: false
    };
    setTodos([...todos, newTodo]);
    todoNameRef.current.value = '';
  }

  return (
    <div className="relative min-h-screen md:flex">
      <MobileNav />
      <DesktopNav />

      <div className="flex-1 p-10 text-2xl font-bold">
        <input type="text" className="w-full p-2" placeholder="Add a todo" />
        <input type="submit" className="w-full p-2" value="Add" onClick={handleAddTodo}/>
        <TodoList todos={todos} />
        <div>
          {todos.length} Left To Do
        </div>
      </div>
    </div>
  );
}

export default App;
