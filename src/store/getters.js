import { getterTypes } from "./types";

export default {
  [getterTypes.isTodosLoading]: (state) => {
    return state.isTodosLoading;
  },

  [getterTypes.todos]: (state) => {
    return state.todos;
  },

  [getterTypes.activeFilter]: (state) => {
    return state.activeFilter;
  },

  [getterTypes.filteredTodos]: (state) => {
    const filters = {
      all: (todos) => todos,
      active: (todos) => todos.filter(({ isCompleted }) => !isCompleted),
      completed: (todos) => todos.filter(({ isCompleted }) => isCompleted),
    };

    return filters[state.activeFilter](state.todos);
  },

  [getterTypes.remaining]: ({ todos }) => {
    return todos.filter(({ isCompleted }) => !isCompleted).length;
  },

  [getterTypes.allChecked]: ({ todos }) => {
    return todos.every(({ isCompleted }) => isCompleted);
  },

  [getterTypes.progressPercentage]: ({ todos }) => {
    const count = todos.length;
    const remaining = todos.filter(({ isCompleted }) => !isCompleted).length;

    return ((count - remaining) * 100) / count;
  },
};
