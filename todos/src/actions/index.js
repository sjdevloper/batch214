import { todoApi } from "../api/index";

export const addTodo = (dispatch) => async (todoContent) => {
  try {
    const result = await todoApi.addTodo({
      todoContent,
      isCompleted: false,
    });

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
    const result = await todoApi.modTodo(index);
   
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
    const result = await todoApi.delTodo(index);
    dispatch({
      type: "DEL",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
