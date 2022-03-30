import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./components/App";

describe("My first Unit test", () => {
  const initState = [];
  const mockStore = configureStore();
  let store;

  it("Button is rendered correctly", () => {
    store = mockStore(initState);
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("add-todo-btn")).not.toBeNull();
  });

  it("todos list has been rendered correctly", () => {
    store = mockStore([{ todoContent: "123", isCompleted: false }]);
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("todo-content-0")).not.toBeNull();
  });
});
