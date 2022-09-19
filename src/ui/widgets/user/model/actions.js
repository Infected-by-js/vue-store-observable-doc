import api from "../api";
import { actionTypes } from "./types";

export default {
  async [actionTypes.getTodos](context) {
    try {
      const params = { limit: context.state.todosCount };
      const todos = await api.getTodos(params);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  },
};
