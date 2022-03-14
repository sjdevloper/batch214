import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here

const submitButton = document.querySelector(".addTodoList");
const todoList = document.querySelector(".list");
const input = document.querySelector(".inputBox");
const element = document.createElement("ul");

submitButton.onclick = (e) => {
  todoApi
    .addTodo({ content: `${input.value}`, isCompleted: false })
    .then((res) => {});

  showForm();

  e.preventDefault();
};

const showForm = () => {
  element.innerHTML = "";
  todoList.append(element);
  action();
};

const action = () => {
  todoApi.getAllTodos().then((res) => {
    res.todos.map(({ content }, index) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const btn = document.createElement("button");

      element.append(li);
      span.textContent = content;
      li.append(span);

      span.onclick = () => {
        span.style.setProperty("text-decoration", "line-through");
      };

      btn.textContent = "Delete";
      btn.className = "btn";
      btn.id = `${index}`;
      const deleteBtn = (index) => {
        todoApi.delTodo(index).then((res) => {
          console.log(res);
          showForm();
        });
      };
      btn.onclick = () => {
        deleteBtn(index);
      };

      li.append(btn);
    });
  });
};

showForm();
