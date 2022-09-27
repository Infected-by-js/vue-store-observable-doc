import api from "@/api";
import TodoDto from "./TodoDto";

export default {
  getTodos: (params = null) =>
    api
      .get("todos", params)
      .then(({ todos }) => todos.map((todo) => new TodoDto(todo))),
};
