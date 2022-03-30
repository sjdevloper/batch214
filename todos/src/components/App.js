import { useEffect, useState } from "react";

import Header from "./header/Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

import "./App.css";

function App() {
 
  return (
    <div className="App">
      <Header headerContent="todos" />
      <hr />
      <InputTodo />
      <TodoList />
    </div>
  );
}

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const delTodo = (index) => {
//     setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
//   };

//   const modTodo = (index) => {
//     const newTodoList = [...todoList];
//     newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
//     setTodoList(newTodoList);
//   };

//   return (
//     <div className="App">
//       <Header headerContent="todos" />
//       <hr />
//       <InputTodo setTodoList={setTodoList} />
//       <TodoList todoList={todoList} delTodo={delTodo} modTodo={modTodo} />
//     </div>
//   );
// }

export default App;
