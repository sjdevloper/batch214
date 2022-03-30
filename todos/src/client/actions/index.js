
import { todoApi } from "../api/index";
import { generateAjaxConfig } from "../components/helper/index";

export const addTodo = (dispatch) => async (todoContent) => {
  try {
    // const result = await todoApi.addTodo({
    //   todoContent,
    //   isCompleted: false,
    // });

    const response = await fetch(
      './addTodo',
      generateAjaxConfig({
        todoContent,
        isCompleted:false,
      })
    )

    const result = await response.json();

    dispatch({
      type: "ADD",
      payload: {
        todoContent,
        isCompleted: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const response = await fetch('/modTodo', generateAjaxConfig(index))
    const result = await response.json();
    console.log(result);
    dispatch({
      type: "MOD",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const response = await fetch('/delTodo',generateAjaxConfig({index}));
    const result = await response.json();
    console.log(result);
    dispatch({
      type: "DEL",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
