import requests from "@/api/requests";
import { actionTypes } from "./types";

export default {
  async [actionTypes.getTodos](context) {
    try {
      context.state.isTodosLoading = true;
      context.state.todos = await requests.getTodos({ limit: 3 });
      context.state.isTodosLoading = false;
    } catch (error) {
      context.state.todosError = error;
    }
  },

  [actionTypes.setActiveFilter](context, value) {
    context.state.activeFilter = value;
  },

  [actionTypes.addTodo](context, text) {
    const newTodo = {
      id: Date.now().toString(16),
      isCompleted: false,
      text,
    };

    context.state.todos.push(newTodo);
  },

  [actionTypes.removeTodo](context, todoId) {
    const todos = context.state.todos;

    context.state.todos = todos.filter(({ id }) => {
      return id !== todoId;
    });
  },

  [actionTypes.editTodo](context, { todoId, value }) {
    const todos = context.state.todos;

    context.state.todos = todos.map((todo) => {
      return todo.id === todoId ? { ...todo, text: value } : todo;
    });
  },

  [actionTypes.toggleTodo](context, todoId) {
    const todos = context.state.todos;

    context.state.todos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
  },

  [actionTypes.toggleAll](context) {
    const todos = context.state.todos;
    const allChecked = todos.every(({ isCompleted }) => isCompleted);

    context.state.todos = todos.map((todo) => {
      return { ...todo, isCompleted: !allChecked };
    });
  },

  [actionTypes.clearCompleted](context) {
    const todos = context.state.todos;

    context.state.todos = todos.filter(({ isCompleted }) => !isCompleted);
  },
};
