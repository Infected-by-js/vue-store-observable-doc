<template>
  <v-slide-y-transition>
    <v-btn
      @click="clearCompleted"
      v-show="todos.length > remaining"
      block
      class="mt-4"
      color="indigo lighten-2 white--text"
      depressed
      rounded
    >
      Clear completed
    </v-btn>
  </v-slide-y-transition>
</template>

<script>
import { mapActions, mapGetters } from "@/lib/store-observable-package";
import { actionTypes, getterTypes } from "@/store/types";

export default {
  name: "todos-btn-clear",

  inject: ["store"],

  computed: {
    ...mapGetters({
      todos: getterTypes.todos,
      remaining: getterTypes.remaining,
    }),
  },

  methods: {
    ...mapActions([actionTypes.clearCompleted]),
  },
};
</script>
