<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="px-2 py-3 d-flex align-center"
      :class="{ isEditing: isEditing }"
      flat
    >
      <v-card-actions>
        <v-checkbox
          v-if="!isEditing"
          @change="toggleTodo(todo.id)"
          :input-value="todo.isCompleted"
          color="indigo"
          class="ma-0 pa-0"
          hide-details
        />
        <v-icon v-else color="indigo" class="mr-3">mdi-pencil</v-icon>
      </v-card-actions>

      <template v-if="!isEditing">
        <v-card-text
          class="text-subtitle-1 pa-0 px-4 ma-0"
          :class="{ 'indigo--text': todo.isCompleted }"
          @dblclick="isEditing = true"
        >
          {{ todo.text }}
        </v-card-text>

        <v-btn
          @click="removeTodo(todo.id)"
          color="red lighten-3"
          icon
          class="transition-fast-in-fast-out"
          :style="`opacity: ${hover ? 1 : 0}`"
        >
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </template>

      <v-text-field
        v-else
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        :value="todo.text"
        :label="'New todo input'"
        placeholder="What needs to be done?"
        autofocus
        clearable
        color="indigo"
        flat
        hide-details
        maxlength="1023"
        solo
        dense
      />
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from "@/lib/store-observable-package";
import { actionTypes } from "@/store/types";

export default {
  name: "todos-list-item",

  inject: ["store"],

  props: {
    todo: Object,
  },

  data() {
    return {
      isEditing: false,
    };
  },

  methods: {
    ...mapActions([
      actionTypes.removeTodo,
      actionTypes.editTodo,
      actionTypes.toggleTodo,
    ]),

    doneEdit({ target }) {
      const value = target.value.trim();
      const todoId = this.todo.id;

      if (!value) {
        this.removeTodo(todoId);
      } else if (this.isEditing) {
        this.editTodo({ todoId, value });

        this.isEditing = false;
      }
    },

    cancelEdit() {
      this.isEditing = false;
    },
  },
};
</script>
