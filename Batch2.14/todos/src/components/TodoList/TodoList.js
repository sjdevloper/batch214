import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todoList, delTodo, modTodo }) => {
  const todoElements = todoList.map(({ todoContent, isCompleted }, index) => {
    return (
      <TodoItem
        key={`${todoContent} - ${index}`}
        todoContent={todoContent}
        isCompleted={isCompleted}
        index={index}
        delTodo={delTodo}
        modTodo={modTodo}
      />
    );
  });

  return <ul className="todo-unorder-llist">{todoElements}</ul>;
};

export default TodoItem;
