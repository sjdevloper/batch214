import { useEffect, useState } from "react";
import Header from "./header/Header";
import InputTodo from "./InputTodo/InputTodo";
import TodoList from "./TodoList/TodoList";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const delTodo = (index) => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  const modTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Header headerContent="todos" />
      <hr />
      <InputTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} delTodo={delTodo} modTodo={modTodo} />
    </div>
  );
}

export default App;

//dispatch action => reducer => update states
