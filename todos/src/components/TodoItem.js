import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions/index";

const TodoItem = ({ todoContent, isCompleted, index }) => {
  const dispatch = useDispatch();

  const listItemClassName = `todo-content ${
    isCompleted ? `completed` : `not-completed`
  }`;

  return (
    <li data-testid={`todo-content-${index}`}>
      <span
        onDoubleClick={() => modTodo(dispatch)(index)}
        className={listItemClassName}
      >
        {todoContent}
      </span>
      <button onClick={() => delTodo(dispatch)(index)}>Delete</button>
    </li>
  );
};

// const TodoItem = ({ todoContent, isCompleted, delTodo, modTodo, index }) => {
//   const listItemClassName =   `todo-content ${
//     isCompleted ? `completed`:`not-completed`
//   }`;
//   return (
//     <li>
//       <span onDoubleClick={() => modTodo(index)} className={listItemClassName}>
//         {todoContent}
//       </span>
//       <button onClick={() => delTodo(index)}>Delete</button>
//     </li>
//   );
// };

export default TodoItem;
