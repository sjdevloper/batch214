import "./TodoItem.css";

const TodoItem = ({ todoContent, isCompleted, delTodo, modTodo, index }) => {
    const listItemClassName = `todo-content ${
        isCompleted ? 'completed' : 'not-completed'
    }`;

  return (
    <li>
      <span onDoubleClick={() => modTodo(index)} className={listItemClassName}>
        {todoContent}
      </span>
      <button onClick={() => delTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
