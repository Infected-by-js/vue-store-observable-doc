<template>
  <v-card class="px-2 d-flex align-center" elevation="2">
    <v-card-actions>
      <v-checkbox
        v-if="todos.length"
        :input-value="allChecked"
        @change="toggleAll"
        color="indigo"
        hide-details
        class="ma-0"
      />
      <v-icon v-else color="indigo">mdi-check</v-icon>
    </v-card-actions>

    <v-form @submit.prevent="addNewTodo" class="d-flex flex-grow-1">
      <v-text-field
        v-model.trim="newTodoText"
        :label="'New todo input'"
        placeholder="What needs to be done?"
        clearable
        color="indigo"
        flat
        hide-details
        maxlength="1023"
        solo
      />
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "@/lib/store-observable-package";
import { actionTypes, getterTypes } from "@/store/types";

export default {
  name: "todos-form",

  inject: ["store"],

  data() {
    return {
      newTodoText: "",
    };
  },

  computed: {
    ...mapGetters({
      todos: getterTypes.todos,
      allChecked: getterTypes.allChecked,
    }),
  },

  methods: {
    ...mapActions([actionTypes.toggleAll, actionTypes.addTodo]),

    addNewTodo() {
      if (this.newTodoText) this.addTodo(this.newTodoText);

      this.newTodoText = "";
    },
  },
};
</script>
