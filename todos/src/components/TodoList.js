import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state);
  const todoElements = todoList.map(({ todoContent, isCompleted }, index) => {
    return (
      <TodoItem
        key={`${todoContent}-${index}`}
        todoContent={todoContent}
        isCompleted={isCompleted}
        index={index}
      />
    );
  });
  return <ul className="todo-unorder-list">{todoElements}</ul>;
};

// const TodoList = ({ todoList, delTodo, modTodo }) => {
//   const todoElements = todoList.map(({ todoContent, isCompleted }, index) => {
//     return (
//       <TodoItem
//         key={`${todoContent}-${index}`}
//         todoContent={todoContent}
//         isCompleted={isCompleted}
//         index={index}
//         delTodo={delTodo}
//         modTodo={modTodo}
//       />
//     );
//   });
//   return <ul className="todo-unorder-list">{todoElements}</ul>;
// };

export default TodoList;
