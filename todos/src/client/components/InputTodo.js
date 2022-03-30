import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../actions/index";

const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoToGlobalState = () => {
    if (!inputTodo.trim()) {
      setInputTodo("");
      return;
    }

    addTodo(dispatch)(inputTodo);


    setInputTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={addTodoToGlobalState} data-testid = "add-todo-btn">Add</button>
    </div>
  );
};

// const InputTodo = ({ setTodoList }) => {
//   const [inputTodo, setInputTodo] = useState("");

//   const addTodo = () => {
//     if (!inputTodo.trim()) {
//       setInputTodo("");
//       return;
//     }
//     setTodoList((preState) => {
//       return [
//         ...preState,
//         {
//           todoContent: inputTodo,
//           isCompleted: false,
//         },
//       ];
//     });

//     setInputTodo("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputTodo}
//         onChange={(e) => setInputTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>
//     </div>
//   );
// };

export default InputTodo;
