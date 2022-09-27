<template>
  <v-sheet color="transparent">
    <todos-form />

    <v-slide-y-transition>
      <v-card v-show="todos.length" class="mt-4" tile elevation="2">
        <todos-progress />
        <todos-filter />

        <v-list class="pa-0">
          <template v-for="todo in filteredTodos">
            <v-divider :key="`${todo.id}-divider`" />

            <todos-list-item :key="todo.id" :todo="todo" />
          </template>
        </v-list>
      </v-card>
    </v-slide-y-transition>

    <todos-btn-clear />
  </v-sheet>
</template>

<script>
import { mapGetters } from "@/lib/store-observable-package";
import { getterTypes } from "@/store/types";
import TodosForm from "./components/TodosForm.vue";
import TodosProgress from "./components/TodosProgress.vue";
import TodosFilter from "./components/TodosFilter.vue";
import TodosListItem from "./components/TodosListItem.vue";
import TodosBtnClear from "./components/TodosBtnClear.vue";

export default {
  name: "todos-card",

  components: {
    TodosForm,
    TodosProgress,
    TodosFilter,
    TodosListItem,
    TodosBtnClear,
  },

  inject: ["store"],

  computed: {
    ...mapGetters({
      todos: getterTypes.todos,
      filteredTodos: getterTypes.filteredTodos,
    }),
  },
};
</script>
