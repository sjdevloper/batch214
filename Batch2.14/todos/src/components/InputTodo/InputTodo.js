import { useState } from "react";

const InputTodo = ({ setTodoList }) => {
  const [inputTodo, setInputTodo] = useState("");

  const addTodo = () => {
    if (!inputTodo.trim()) {
      setInputTodo("");
      return;
    }

    setTodoList((preState) => {
      return [
        ...preState,
        {
          todoContent: inputTodo,
          isCompleted: false,
        },
      ];
    });
    setInputTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={(addTodo) => {}}> Add </button>
    </div>
  );
};

export default InputTodo;
