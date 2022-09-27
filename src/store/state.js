import { FILTERS } from "@/helpers/constants";

export default () => ({
  isTodosLoading: false,
  todosError: null,
  todos: [],
  activeFilter: FILTERS[0].value,
});
